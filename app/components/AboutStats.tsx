export default function AboutStats() {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-xl">
          <h2 className="text-headline-md mb-6 text-primary">Sobre Mim</h2>
          <p className="font-body-base text-body-base text-on-surface-variant mb-6">
            Comecei a programar há cerca de 2 meses e desde então venho construindo projetos práticos com HTML, CSS, JavaScript, TypeScript e React. Cada repositório no GitHub representa um novo aprendizado — de componentes funcionais a deploy com Firebase Hosting. Meu foco atual é desenvolvimento web full stack com Next.js.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Git", "Firebase"].map(
              (skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[11px] font-code-sm rounded"
                >
                  {skill}
                </span>
              )
            )}
          </div>
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-white/5">
            <div>
              <span className="block text-headline-md text-secondary">2 Meses</span>
              <span className="font-label-caps text-label-caps text-outline">Estudando</span>
            </div>
            <div>
              <span className="block text-headline-md text-secondary">5</span>
              <span className="font-label-caps text-label-caps text-outline">Repositórios</span>
            </div>
            <div>
              <span className="block text-headline-md text-secondary">Em andamento</span>
              <span className="font-label-caps text-label-caps text-outline">Aprendizado</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-label-caps text-label-caps text-primary">Linguagens</h3>
              <span className="material-symbols-outlined text-secondary">query_stats</span>
            </div>
            <div className="space-y-4">
              {[
                { lang: "TypeScript", width: "35%", color: "bg-primary" },
                { lang: "HTML", width: "26%", color: "bg-secondary" },
                { lang: "CSS", width: "17%", color: "bg-tertiary" },
                { lang: "JavaScript", width: "15%", color: "bg-primary-container" },
              ].map((item) => (
                <div key={item.lang} className="flex justify-between items-center">
                  <span className="font-code-sm text-code-sm">{item.lang}</span>
                  <div className="h-1.5 w-32 bg-surface-container-high rounded-full overflow-hidden">
                    <div className={`h-full ${item.color}`} style={{ width: item.width }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-container-high p-6 rounded-xl border border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                  terminal
                </span>
              </div>
              <div>
                <p className="font-label-caps text-label-caps text-outline mb-1">Último Projeto</p>
                <p className="font-body-base text-body-base">Portfólio com Next.js + Tailwind v4 + Firebase Hosting</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
