import Link from "next/link"
import Image from "next/image"
import { projects } from "@/lib/projects"

export default function Projects() {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap" id="projects">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:justify-between sm:items-end mb-12">
        <div>
          <h2 className="text-headline-md text-on-surface">Projetos</h2>
          <p className="text-on-surface-variant font-body-base">{projects.length} repositórios públicos, de estudos a aplicações e jogos.</p>
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
            className={`${p.span} group relative rounded-xl overflow-hidden glass-panel flex flex-col border border-white/10 hover:border-primary/40 transition-all p-6 bg-surface-container/90 backdrop-blur-md`}
          >
            <div className="relative aspect-video -mx-6 -mt-6 mb-6 overflow-hidden bg-surface-container-high border-b border-white/10">
              <Image
                src={p.preview}
                alt={p.previewAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="absolute bottom-3 left-3 rounded bg-background/85 px-3 py-1 font-code-sm text-xs text-on-surface backdrop-blur-sm">
                Prévia do projeto
              </span>
            </div>
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
