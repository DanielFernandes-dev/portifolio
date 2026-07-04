const events = [
  {
    year: "2026",
    title: "Senior Developer",
    subtitle: "Tech Architect @ Global AI",
    description: "Liderando a migração para infraestrutura edge e integração nativa de IA em escala global.",
    align: "left",
    dotColor: "bg-secondary",
  },
  {
    year: "2024",
    title: "Full Stack Dev",
    subtitle: "SaaS Product Engineer",
    description: "Desenvolvimento end-to-end de soluções em tempo real utilizando WebSockets e Rust.",
    align: "right",
    dotColor: "bg-primary",
  },
  {
    year: "2023",
    title: "Junior Dev",
    subtitle: "Start-up Experience",
    description: "Início na jornada React/Node, entregando MVPs ágeis e escaláveis.",
    align: "left",
    dotColor: "bg-outline",
  },
]

export default function Timeline() {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap" id="timeline">
      <h2 className="text-headline-md mb-16 text-center text-primary">Trajetória Evolutiva</h2>
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
    </section>
  )
}
