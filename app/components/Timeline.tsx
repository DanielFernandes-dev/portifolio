"use client"

import { useState } from "react"
import { activityMonths, activityUpdatedAt } from "@/lib/activityMonths"

const MONTHS_PT = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
]

const portfolioCount = activityMonths.filter((item) => item.portfolio).length

export default function Timeline() {
  const [filter, setFilter] = useState<"all" | "portfolio">("all")
  const visibleMonths = filter === "portfolio"
    ? activityMonths.filter((item) => item.portfolio)
    : activityMonths
  const years = [...new Set(visibleMonths.map((item) => item.year))]

  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap scroll-mt-20" id="timeline">
      <div className="overflow-hidden rounded-[28px] border border-white/10 bg-surface-container-low">
        <div className="relative overflow-hidden border-b border-white/10 px-6 py-10 sm:px-10 lg:px-12 lg:py-12">
          <div className="pointer-events-none absolute -right-16 -top-24 h-72 w-72 rounded-full bg-primary/10 blur-3xl" aria-hidden="true" />
          <div className="pointer-events-none absolute bottom-0 right-24 h-40 w-40 rounded-full bg-secondary/10 blur-3xl" aria-hidden="true" />
          <div className="relative max-w-3xl">
            <p className="font-code-sm text-xs uppercase tracking-[0.22em] text-secondary mb-4">Trajetória / GitHub</p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-on-surface mb-4">Minha Jornada</h2>
            <p className="font-body-base text-on-surface-variant max-w-2xl">
              Cada mês abaixo tem atividade registrada no meu GitHub. Os meses em que também trabalhei neste portfólio estão destacados.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-background/55 px-4 py-3">
                <strong className="text-2xl font-semibold text-primary">{activityMonths.length}</strong>
                <span className="text-sm text-on-surface-variant leading-tight">meses com<br />atividade</span>
              </div>
              <div className="flex items-center gap-3 rounded-xl border border-secondary/20 bg-secondary/5 px-4 py-3">
                <strong className="text-2xl font-semibold text-secondary">{portfolioCount}</strong>
                <span className="text-sm text-on-surface-variant leading-tight">meses neste<br />portfólio</span>
              </div>
            </div>
          </div>
        </div>

        <div className="px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between mb-9">
            <div>
              <h3 className="text-xl font-semibold text-on-surface mb-1">Meses ativos</h3>
              <p className="text-sm text-on-surface-variant">Do primeiro registro ao mais recente.</p>
            </div>
            <div className="inline-flex self-start rounded-xl border border-white/10 bg-background/55 p-1" role="group" aria-label="Filtrar meses da jornada">
              <button
                type="button"
                aria-pressed={filter === "all"}
                onClick={() => setFilter("all")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${filter === "all" ? "bg-primary text-on-primary" : "text-on-surface-variant hover:text-on-surface"}`}
              >
                Todos ({activityMonths.length})
              </button>
              <button
                type="button"
                aria-pressed={filter === "portfolio"}
                onClick={() => setFilter("portfolio")}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${filter === "portfolio" ? "bg-secondary text-on-secondary" : "text-on-surface-variant hover:text-on-surface"}`}
              >
                Portfólio ({portfolioCount})
              </button>
            </div>
          </div>

          <p className="sr-only" aria-live="polite">Exibindo {visibleMonths.length} meses.</p>
          <div className="space-y-9">
            {years.map((year) => (
              <div key={year} aria-labelledby={`journey-year-${year}`}>
                <div className="flex items-center gap-4 mb-5">
                  <h4 id={`journey-year-${year}`} className="font-code-sm text-sm text-secondary">{year}</h4>
                  <div className="h-px flex-1 bg-outline-variant/60" aria-hidden="true" />
                </div>
                <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {visibleMonths.filter((item) => item.year === year).map((item) => (
                    <li
                      key={`${item.year}-${item.month}`}
                      className={`relative min-h-40 rounded-2xl border p-5 flex flex-col justify-between ${item.portfolio
                        ? "border-secondary/40 bg-secondary/5"
                        : "border-white/10 bg-surface-container/70"}`}
                    >
                      <div className="flex items-start justify-between gap-3">
                        <span className={`font-code-sm text-xs tracking-widest ${item.portfolio ? "text-secondary" : "text-outline"}`}>
                          {String(item.month).padStart(2, "0")} / {item.year}
                        </span>
                        <span className={`material-symbols-outlined text-xl ${item.portfolio ? "text-secondary" : "text-primary/70"}`} aria-hidden="true">
                          {item.portfolio ? "code_blocks" : "commit"}
                        </span>
                      </div>
                      <div>
                        <span className="block text-xl font-semibold text-on-surface mb-2">{MONTHS_PT[item.month - 1]}</span>
                        <span className={`inline-flex items-center gap-2 text-xs font-code-sm ${item.portfolio ? "text-secondary" : "text-on-surface-variant"}`}>
                          <span className={`h-1.5 w-1.5 rounded-full ${item.portfolio ? "bg-secondary" : "bg-primary"}`} aria-hidden="true" />
                          {item.portfolio ? "Portfólio + GitHub" : "Atividade no GitHub"}
                        </span>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-xs leading-relaxed text-on-surface-variant">
              Os meses são identificados por contribuições no perfil e commits dos repositórios. Eles indicam atividade, não horas trabalhadas. Dados conferidos em {activityUpdatedAt}.
            </p>
            <div className="flex flex-wrap gap-4 text-sm font-medium">
              <a href="https://github.com/DanielFernandes-dev" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
                Ver GitHub ↗
              </a>
              <a href="https://diario-do-dev.web.app/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                Diário do Dev ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
