export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden px-gutter">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h1 className="text-display-lg-mobile md:text-display-lg mb-4 text-on-surface">
          Daniel Fernandes
        </h1>
        <p className="font-code-sm text-code-sm text-secondary tracking-widest uppercase mb-8">
          Estudante de Programação | JavaScript • TypeScript • React
        </p>
        <p className="font-body-base text-body-base text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Ainda aprendendo a programar. Construindo projetos para evoluir como desenvolvedor, explorando front-end, back-end e tudo que envolve criar soluções com tecnologia.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all">
            Ver Projetos
          </button>
          <button className="glass-panel text-on-surface px-8 py-3 rounded-lg font-bold hover:bg-surface-container-high transition-all">
            GitHub
          </button>
          <button className="border border-primary/30 text-primary px-8 py-3 rounded-lg font-bold hover:bg-primary/10 transition-all">
            Currículo
          </button>
        </div>
      </div>
    </section>
  )
}
