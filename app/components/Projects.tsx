import Link from "next/link"

const projects = [
  {
    title: "lotofacil_app",
    description: "Aplicativo para análise de resultados da Lotofácil, construído com TypeScript.",
    tags: ["TypeScript", "CSS", "HTML"],
    url: "https://github.com/DanielFernandes-dev/lotofacil_app",
    span: "md:col-span-6",
  },
  {
    title: "redator",
    description: "Editor de texto simples para web com JavaScript, Python e HTML.",
    tags: ["JavaScript", "Python", "HTML"],
    url: "https://github.com/DanielFernandes-dev/redator",
    span: "md:col-span-6",
  },
  {
    title: "site-html",
    description: "Site desenvolvido com HTML puro, publicado via GitHub Pages.",
    tags: ["HTML"],
    url: "https://github.com/DanielFernandes-dev/site-html",
    span: "md:col-span-4",
  },
  {
    title: "teste-react",
    description: "Projeto de teste com React, foco em estilização CSS.",
    tags: ["CSS", "JavaScript", "React"],
    url: "https://github.com/DanielFernandes-dev/teste-react",
    span: "md:col-span-4",
  },
  {
    title: "portifolio",
    description: "Este portfólio — Next.js + Tailwind CSS v4 + Firebase Hosting.",
    tags: ["TypeScript", "Next.js", "Tailwind"],
    url: "https://github.com/DanielFernandes-dev/portifolio",
    span: "md:col-span-4",
  },
]

export default function Projects() {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap" id="projects">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-headline-md text-on-surface">Projetos</h2>
          <p className="text-on-surface-variant font-body-base">Meus repositórios públicos no GitHub.</p>
        </div>
        <Link
          href="https://github.com/DanielFernandes-dev"
          className="text-primary font-label-caps hover:underline"
        >
          Ver Todos
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`${p.span} group relative rounded-xl overflow-hidden glass-panel flex-col border border-white/10 hover:border-primary/40 transition-all p-6 bg-surface-container/90 backdrop-blur-md`}
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-headline-md text-on-surface group-hover:text-primary transition-colors">
                {p.title}
              </h3>
              <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                open_in_new
              </span>
            </div>
            <p className="font-body-base text-sm text-on-surface-variant mb-3 flex-1">{p.description}</p>
            <div className="flex gap-2 flex-wrap">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-primary/10 border border-primary/30 text-primary text-[10px] font-code-sm rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
