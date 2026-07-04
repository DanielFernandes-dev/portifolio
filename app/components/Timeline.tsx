const events = [
  {
    year: "2026",
    title: "Portfólio + Firebase",
    subtitle: "Publicação no Firebase Hosting",
    description: "Criação deste portfólio com Next.js + Tailwind v4, deploy automatizado no Firebase Hosting.",
    align: "left",
    dotColor: "bg-secondary",
  },
  {
    year: "2026",
    title: "Projetos em React",
    subtitle: "FoodBlog e estudos",
    description: "Primeiros projetos com React e TypeScript, explorando componentes e SPA.",
    align: "right",
    dotColor: "bg-primary",
  },
  {
    year: "2025",
    title: "Início nos Estudos",
    subtitle: "Primeiros passos",
    description: "Criação da conta no GitHub e início da jornada na programação com JavaScript.",
    align: "left",
    dotColor: "bg-outline",
  },
]

export default function Timeline() {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap" id="timeline">
      <h2 className="text-headline-md mb-16 text-center text-primary">Minha Jornada</h2>
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-[2px] bg-surface-container-high" />
        {events.map((e) => (
          <div
            key={e.year}
            className={`relative mb-16 flex items-center justify-between w-full ${e.align === "right" ? "flex-row-reverse" : ""}`}
          >
            <div className={`w-[45%] ${e.align === "right" ? "text-left pl-8" : "text-right pr-8"}`}>
              <h4 className="text-headline-md text-on-surface">{e.title}</h4>
              <p className="text-outline font-code-sm mb-2">{e.subtitle}</p>
              <p className="text-sm text-on-surface-variant">{e.description}</p>
            </div>
            <div
              className={`absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full z-10 border-4 border-background ${e.dotColor} ${e.year === "2026" ? "timeline-pulse" : ""}`}
            />
            <div className={`w-[45%] ${e.align === "right" ? "text-right pr-8" : "pl-8"}`}>
              <span
                className={`font-code-sm px-3 py-1 rounded ${
                  e.year === "2026"
                    ? "text-secondary bg-secondary/10"
                    : e.year === "2024"
                      ? "text-primary bg-primary/10"
                      : "text-outline bg-surface-container-high"
                }`}
              >
                {e.year}
              </span>
            </div>
          </div>
        ))}
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
