export default function Hero() {
  return (
    <section className="relative min-h-[921px] flex items-center justify-center overflow-hidden px-gutter">
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <img
          src="https://avatars.githubusercontent.com/u/239253498?v=4"
          alt="Daniel Fernandes"
          className="w-28 h-28 md:w-36 md:h-36 rounded-full mx-auto mb-6 border-2 border-primary/50"
        />
        <h1 className="text-display-lg-mobile md:text-display-lg mb-4 text-on-surface">
          Daniel Fernandes
        </h1>
        <p className="font-code-sm text-code-sm text-secondary tracking-widest uppercase mb-8">
          Estudante de Programação | JavaScript • TypeScript • React
        </p>
        <p className="font-body-base text-body-base text-on-surface-variant mb-12 max-w-2xl mx-auto">
          Comecei minha jornada em programação há 2 meses e já construí projetos reais com React, TypeScript e Next.js. Cada repositório no GitHub reflete um passo concreto no aprendizado. Conheça meu trabalho.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="bg-primary text-on-primary px-8 py-3 rounded-lg font-bold hover:scale-105 active:scale-95 transition-all inline-block"
          >
            Explorar Projetos
          </a>
          <a
            href="https://github.com/DanielFernandes-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel text-on-surface px-8 py-3 rounded-lg font-bold hover:bg-surface-container-high transition-all inline-block"
          >
            GitHub
          </a>
          <a
            href="#footer"
            className="glass-panel text-on-surface px-8 py-3 rounded-lg font-bold hover:bg-surface-container-high transition-all inline-block"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  )
}
