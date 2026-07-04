import Link from "next/link"

const projects = [
  {
    title: "blog_beta",
    description: "Blog em TypeScript com suporte a GitHub Pages.",
    tags: ["TypeScript", "GitHub Pages"],
    url: "https://github.com/DanielFernandes-dev/blog_beta",
    image: null,
    span: "md:col-span-6",
    height: "flex-col",
  },
  {
    title: "site-html",
    description: "Site desenvolvido com HTML puro, publicado via GitHub Pages.",
    tags: ["HTML", "CSS"],
    url: "https://github.com/DanielFernandes-dev/site-html",
    image: null,
    span: "md:col-span-6",
    height: "flex-col",
  },
  {
    title: "FoodBlog React",
    description: "Blog de receitas desenvolvido com React e JavaScript.",
    tags: ["React", "JavaScript"],
    url: "https://github.com/DanielFernandes-dev/foodblog-react",
    image: null,
    span: "md:col-span-4",
    height: "flex-col",
  },
  {
    title: "Lotofácil App",
    description: "Aplicativo para análise da Lotofácil usando TypeScript.",
    tags: ["TypeScript"],
    url: "https://github.com/DanielFernandes-dev/lotofacil_app",
    image: null,
    span: "md:col-span-4",
    height: "flex-col",
  },
  {
    title: "Projeto Python",
    description: "Projeto de estudos em Python para automação e análise.",
    tags: ["Python"],
    url: "https://github.com/DanielFernandes-dev/projeto-python",
    image: null,
    span: "md:col-span-4",
    height: "flex-col",
  },
  {
    title: "redator",
    description: "Editor de texto simples para web, com foco em JavaScript.",
    tags: ["JavaScript"],
    url: "https://github.com/DanielFernandes-dev/redator",
    image: null,
    span: "md:col-span-6",
    height: "flex-row items-center min-h-[120px]",
  },
  {
    title: "novel_web",
    description: "Plataforma web para leitura de novelas em TypeScript.",
    tags: ["TypeScript"],
    url: "https://github.com/DanielFernandes-dev/novel_web",
    image: null,
    span: "md:col-span-6",
    height: "flex-row items-center min-h-[120px]",
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
            className={`${p.span} group relative rounded-xl overflow-hidden glass-panel ${p.height} border border-white/10 hover:border-primary/40 transition-all`}
          >
            <div className="p-6 bg-surface-container/90 backdrop-blur-md flex-1 flex flex-col justify-center">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-headline-md text-on-surface group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <span className="material-symbols-outlined text-on-surface-variant group-hover:text-primary transition-colors">
                  open_in_new
                </span>
              </div>
              <p className="font-body-base text-sm text-on-surface-variant mb-3">{p.description}</p>
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
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
