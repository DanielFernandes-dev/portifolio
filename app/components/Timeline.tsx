"use client"

import { useEffect, useState } from "react"
import { projects } from "@/lib/projects"

const GITHUB_USER = "DanielFernandes-dev"

const MONTHS_PT = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
]

type ActivityMonth = { year: number; month: number; count: number }
type GitHubCommit = { commit?: { committer?: { date?: string } } }

function getMonthName({ year, month }: ActivityMonth) {
  return `${MONTHS_PT[month - 1]} de ${year}`
}

async function fetchRepoCommitDates(repo: string, signal: AbortSignal): Promise<string[]> {
  const dates: string[] = []
  let page = 1

  while (true) {
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_USER}/${repo}/commits?per_page=100&page=${page}`,
      { headers: { Accept: "application/vnd.github+json" }, signal }
    )

    if (!response.ok) throw new Error(`GitHub: ${response.status}`)

    const commits: GitHubCommit[] = await response.json()
    for (const item of commits) {
      const date = item.commit?.committer?.date
      if (date) dates.push(date)
    }

    if (!response.headers.get("link")?.includes('rel="next"')) break
    page += 1
  }

  return dates
}

async function fetchActivityMonths(signal: AbortSignal): Promise<ActivityMonth[]> {
  const datesByRepo = await Promise.all(
    projects.map((project) => fetchRepoCommitDates(project.title, signal))
  )
  const counts = new Map<string, number>()

  for (const dates of datesByRepo) {
    for (const date of dates) {
      const key = date.slice(0, 7)
      counts.set(key, (counts.get(key) ?? 0) + 1)
    }
  }

  return [...counts].map(([key, count]) => {
    const [year, month] = key.split("-").map(Number)
    return { year, month, count }
  }).sort((a, b) => b.count - a.count || b.year - a.year || b.month - a.month)
}

export default function Timeline() {
  const [months, setMonths] = useState<ActivityMonth[]>([])
  const [status, setStatus] = useState<"loading" | "ready" | "error">("loading")

  useEffect(() => {
    const controller = new AbortController()
    fetchActivityMonths(controller.signal)
      .then((activity) => {
        setMonths(activity)
        setStatus("ready")
      })
      .catch(() => {
        if (!controller.signal.aborted) setStatus("error")
      })
    return () => controller.abort()
  }, [])

  const maxCount = months[0]?.count ?? 0

  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap" id="timeline">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-headline-md mb-3 text-center text-primary">Minha Jornada</h2>
        <div className="glass-panel rounded-xl p-6 mb-10 text-center">
          <h3 className="font-body-base font-semibold text-on-surface mb-2">Atividade neste portfólio</h3>
          <p className="font-body-base text-on-surface-variant">
            O histórico deste projeto registra commits em julho e outubro de 2026.
          </p>
        </div>
        <h3 className="text-headline-md text-center text-on-surface mb-3">Atividade no GitHub</h3>
        <p className="text-center text-on-surface-variant font-body-base mb-10">
          Meses com commits nos {projects.length} repositórios públicos do meu GitHub, do mais ativo ao menos ativo.
        </p>

        {status === "loading" && (
          <p className="text-center text-on-surface-variant font-body-base py-12">Carregando atividade do GitHub...</p>
        )}
        {status === "error" && (
          <p className="text-center text-on-surface-variant font-body-base py-12">
            Não foi possível carregar a atividade do GitHub agora.
          </p>
        )}
        {status === "ready" && months.length === 0 && (
          <p className="text-center text-on-surface-variant font-body-base py-12">Nenhum mês com commits encontrado.</p>
        )}
        {status === "ready" && months.length > 0 && (
          <div className="space-y-4" aria-label="Meses com atividade nos repositórios públicos">
            {months.map((item, index) => (
              <div key={`${item.year}-${item.month}`} className="glass-panel rounded-xl p-5 sm:p-6">
                <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="font-body-base font-semibold text-on-surface">{getMonthName(item)}</h3>
                    {index === 0 && (
                      <span className="text-xs font-code-sm text-secondary bg-secondary/10 px-2 py-1 rounded">
                        Mês mais ativo
                      </span>
                    )}
                  </div>
                  <span className="font-code-sm text-code-sm text-secondary">
                    {item.count} {item.count === 1 ? "commit" : "commits"}
                  </span>
                </div>
                <div className="h-2 rounded-full bg-surface-container-high overflow-hidden" aria-hidden="true">
                  <div className="h-full rounded-full bg-primary" style={{ width: `${item.count / maxCount * 100}%` }} />
                </div>
              </div>
            ))}
            <p className="text-xs text-on-surface-variant text-center pt-2">
              Contagem por data dos commits dos repositórios; inclui contribuições de outras pessoas quando houver.
            </p>
          </div>
        )}

        <div className="text-center mt-12">
          <a
            href="https://diario-do-dev.web.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel inline-flex items-center gap-4 px-6 py-4 rounded-xl text-on-surface hover:bg-surface-container-high transition-all font-body-base"
          >
            <span className="material-symbols-outlined text-secondary">book</span>
            Diário do Dev — acompanhe minha evolução
          </a>
        </div>
      </div>
    </section>
  )
}
