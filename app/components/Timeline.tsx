"use client"

import { useState, useEffect } from "react"
import { projects } from "@/lib/projects"

const GITHUB_USER = "DanielFernandes-dev"
const REPOS = projects.map((project) => project.title)

const MONTHS_PT = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
]

function getMonthName(year: number, month: number) {
  return `${MONTHS_PT[month - 1]} de ${year}`
}

async function fetchMostActiveMonth(): Promise<{ year: number; month: number; count: number } | null> {
  const monthCounts = new Map<string, number>()

  for (const repo of REPOS) {
    try {
      const res = await fetch(
        `https://api.github.com/repos/${GITHUB_USER}/${repo}/commits?per_page=100`,
        { headers: { Accept: "application/vnd.github+json" } }
      )
      if (!res.ok) continue
      const commits = await res.json()
      if (!Array.isArray(commits)) continue

      for (const c of commits) {
        const date = new Date(c.commit.committer.date)
        const key = `${date.getFullYear()}-${date.getMonth() + 1}`
        monthCounts.set(key, (monthCounts.get(key) || 0) + 1)
      }
    } catch {
      // skip failed repos
    }
  }

  let best: { year: number; month: number; count: number } | null = null
  for (const [key, count] of monthCounts) {
    const [y, m] = key.split("-").map(Number)
    if (!best || count > best.count) {
      best = { year: y, month: m, count }
    }
  }

  return best
}

export default function Timeline() {
  const [mostActive, setMostActive] = useState<{ year: number; month: number; count: number } | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchMostActiveMonth().then((data) => {
      setMostActive(data)
      setLoading(false)
    })
  }, [])

  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap" id="timeline">
      <h2 className="text-headline-md mb-16 text-center text-primary">Minha Jornada</h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-surface-container-high" />

        {loading ? (
          <div className="text-center text-on-surface-variant font-body-base py-12">
            Carregando atividade do GitHub...
          </div>
        ) : mostActive ? (
          <div className="relative mb-16 flex items-center justify-between w-full flex-row-reverse">
            <div className="w-[45%] text-left pl-8">
              <h4 className="text-headline-md text-on-surface">Mês em destaque no GitHub</h4>
              <p className="text-outline font-code-sm mb-2">{getMonthName(mostActive.year, mostActive.month)}</p>
              <p className="text-sm text-on-surface-variant">
                {mostActive.count} commits entre os até 100 mais recentes de cada um dos {REPOS.length} repositórios.
              </p>
            </div>
            <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10 border-4 border-background bg-secondary timeline-pulse" />
            <div className="w-[45%] text-right pr-8">
              <span className="font-code-sm px-3 py-1 rounded text-secondary bg-secondary/10">
                {mostActive.year}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center text-on-surface-variant font-body-base py-12">
            Nenhum dado de atividade encontrado.
          </div>
        )}
      </div>
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
    </section>
  )
}
