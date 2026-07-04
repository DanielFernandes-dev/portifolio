export default function AboutStats() {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-xl">
          <h2 className="text-headline-md mb-6 text-primary">Aprendendo a Programar</h2>
          <p className="font-body-base text-body-base text-on-surface-variant mb-6">
            Comecei minha jornada na programação em outubro de 2025 e desde então venho explorando diferentes áreas: desenvolvimento web com React e Next.js, automação com Python, e criação de projetos práticos para consolidar o aprendizado. Meu objetivo é evoluir constantemente, um commit de cada vez.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6 border-t border-white/5">
            <div>
              <span className="block text-headline-md text-secondary">{new Date().getFullYear() - 2025} Anos</span>
              <span className="font-label-caps text-label-caps text-outline">Estudando</span>
            </div>
            <div>
              <span className="block text-headline-md text-secondary">10</span>
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
                { lang: "JavaScript", width: "40%", color: "bg-primary" },
                { lang: "TypeScript", width: "30%", color: "bg-secondary" },
                { lang: "Python", width: "20%", color: "bg-tertiary" },
                { lang: "HTML/CSS", width: "10%", color: "bg-primary-container" },
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
          <div className="bg-surface-container-high p-6 rounded-xl border border-white/10 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
              <span className="material-symbols-outlined text-secondary" style={{ fontVariationSettings: "'FILL' 1" }}>
                terminal
              </span>
            </div>
            <div>
              <p className="font-label-caps text-label-caps text-outline">Último Projeto</p>
              <p className="font-body-base text-body-base">Criado portfólio com Next.js + Firebase</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
