import { projects } from "@/lib/projects"

export default function AboutStats() {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        <div className="lg:col-span-7 glass-panel p-8 md:p-12 rounded-xl">
          <h2 className="text-headline-md mb-6 text-primary">Sobre Mim</h2>
          <p className="font-body-base text-body-base text-on-surface-variant mb-6">
            Sou sócio na Chronokairo e construo projetos para aprender na prática. Meus repositórios públicos incluem um blog com React e Firebase, um editor com API em Python, um aplicativo de organização e uma visual novel para web e Android. Também exploro componentes React e páginas em HTML.
          </p>
          <div className="flex flex-wrap gap-3 mb-6">
            {["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Python", "Firebase"].map(
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
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/5">
            <div>
              <span className="block text-headline-md text-secondary">{projects.length}</span>
              <span className="font-label-caps text-label-caps text-outline">Projetos públicos</span>
            </div>
            <div>
              <span className="block text-headline-md text-secondary">3</span>
              <span className="font-label-caps text-label-caps text-outline">Frentes de estudo</span>
            </div>
            <div>
              <span className="block text-headline-md text-secondary">Web + Android</span>
              <span className="font-label-caps text-label-caps text-outline">Plataformas</span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-6 rounded-xl">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-label-caps text-label-caps text-primary">O que tenho construído</h3>
              <span className="material-symbols-outlined text-secondary">query_stats</span>
            </div>
            <div className="space-y-4">
              {[
                { area: "Web", detail: "Blog, editor e estudos de interface" },
                { area: "Aplicativos", detail: "Organização de conhecimento com Tauri" },
                { area: "Jogos", detail: "Visual novel para navegador e Android" },
              ].map((item) => (
                <div key={item.area} className="flex flex-col gap-1 border-b border-white/5 pb-3 last:border-0 last:pb-0">
                  <span className="font-code-sm text-code-sm text-on-surface">{item.area}</span>
                  <span className="font-body-base text-sm text-on-surface-variant">{item.detail}</span>
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
                <p className="font-label-caps text-label-caps text-outline mb-1">Projeto em destaque</p>
                <p className="font-body-base text-body-base">SANMD: visual novel investigativa para web e Android</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
