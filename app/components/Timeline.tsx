"use client"

import { useState } from "react"
import { activityMonths } from "@/lib/activityMonths"

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
      <div className="rounded-[28px] border border-white/10 bg-surface-container-low px-6 py-8 sm:px-10 lg:px-12 lg:py-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between mb-9">
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-on-surface">Meses ativos</h2>
            <div className="inline-flex self-start rounded-xl border border-white/10 bg-background/55 p-1" role="group" aria-label="Filtrar meses ativos">
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
              <div key={year} aria-labelledby={`active-year-${year}`}>
                <div className="flex items-center gap-4 mb-5">
                  <h3 id={`active-year-${year}`} className="font-code-sm text-sm text-secondary">{year}</h3>
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
      </div>
    </section>
  )
}
