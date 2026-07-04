import Link from "next/link"

const projects = [
  {
    title: "FinTech Core Engine",
    description: "Plataforma de processamento de pagamentos em tempo real com arquitetura de microserviços e alta disponibilidade.",
    tags: ["Next.js", "Go", "PostgreSQL"],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBSHn-CoQ-os64oDeJNoyaq_vQUBMJ-bwOSnKtfMIgyLBJg5EvcqRIEXNdbHkhqrwZmYgNHWl9_0ObI7Tbq8OHujJfEiJbXVsbNKB10J5FJPCDrmskA6Y8MsUEPJzyzof5vkT5lPDIGM5sVoIUGu_5juB6FdDTkXjqI3PyAv2ZnQ-ZjLTxbX6pCVSmBz-hztUQYjajwOevrJqmuEB6RQDNN2-XOIzlceW-Zd-ovMmEhmhJmzHvAysG0kwXQic5LxqqUk232ocXvBX0",
    span: "md:col-span-8",
    height: "flex-col",
  },
  {
    title: "AI Task Automator",
    description: "Pipeline de CI/CD inteligente usando LLMs para análise estática.",
    tags: [],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBmEexk8KyHu-NRJ5Ii-4okDV6bPa7ixBrvmdEELKToX-qv09ZTrleUpz0oqsHM6Q9_v8VFXgID_lK0wNWZAU6rVQTx5hwYfvgx-xBwc682JWO57pQOAgwy1G9NHZ3Bgbm31GlUWcmcWpIyzKjQBTQFnGDDuF2V_RItyAmADftYgpYZCHOo1w0_drj8qhOHLHIg8Up7R3HmUd0KIVthYdJc__uTXWHwCrv2x2lQVZzvh3CtfAHkYRj2Wz0g1p65VQ-MUOj7IhBeh20",
    span: "md:col-span-4",
    height: "flex-col",
  },
  {
    title: "Vector Search API",
    description: "Arquitetura de busca semântica para grandes volumes de dados não estruturados.",
    tags: [],
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZaWJ99uCQGK1GZQwSqBjsFdISZuLrFdw0Im2dBJyEuiim-K7d7nox3ltW6dF2_vDyUWmdapKG7CaP640Xrr9nTrbM158dzdm6WqXKMyUYD3pw0U5iG92SYsTC7EQp9zbmCNI0pIWzNkDPwGHbm-7ANU_33eZGmT0MZrAv807L6Tt0n9866VjdcLwk3Vn8AKSlp-D1VzlGFEVBVF5KAuHPDo4aFd6bZtM6hImsYDQo8_N1s35MD1KP-sDKSzrn8RaOBfVUQW-4gyc",
    span: "md:col-span-12",
    height: "flex-row items-center min-h-[160px]",
  },
]

export default function Projects() {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap" id="projects">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-headline-md text-on-surface">Featured Projects</h2>
          <p className="text-on-surface-variant font-body-base">Arquiteturas reais para problemas complexos.</p>
        </div>
        <Link href="#" className="text-primary font-label-caps hover:underline">
          Ver Todos
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[700px]">
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`${p.span} group relative rounded-xl overflow-hidden glass-panel ${p.height} border border-white/10`}
          >
            <div
              className={`${i === projects.length - 1 ? 'w-1/3 h-full bg-cover bg-center hidden md:block' : 'flex-grow bg-cover bg-center'} transition-transform duration-500 group-hover:scale-105`}
              style={{ backgroundImage: `url('${p.image}')` }}
            />
            <div className={`${i === 0 ? 'p-8' : i === 1 ? 'p-6' : 'p-8 flex-1 flex justify-between items-center'} bg-surface-container/90 backdrop-blur-md`}>
              {i === 2 ? (
                <>
                  <div>
                    <h3 className="text-headline-md text-on-surface mb-1">{p.title}</h3>
                    <p className="font-body-base text-on-surface-variant">{p.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <button className="glass-panel p-4 rounded-lg hover:bg-surface-container-high transition-all">
                      <span className="material-symbols-outlined">code</span>
                    </button>
                    <button className="bg-primary text-on-primary p-4 rounded-lg hover:scale-105 transition-all">
                      <span className="material-symbols-outlined">open_in_new</span>
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-headline-md text-on-surface mb-2">{p.title}</h3>
                      {p.tags.length > 0 && (
                        <div className="flex gap-2">
                          {p.tags.map((tag) => (
                            <span
                              key={tag}
                              className="px-2 py-1 bg-primary/10 border border-primary/30 text-primary text-[10px] font-code-sm rounded"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <button className="bg-primary text-on-primary p-3 rounded-lg flex items-center justify-center">
                      <span className="material-symbols-outlined">arrow_forward</span>
                    </button>
                  </div>
                  <p className="font-body-base text-on-surface-variant line-clamp-2">{p.description}</p>
                  {i === 1 && (
                    <button className="text-primary font-label-caps flex items-center gap-2 hover:gap-4 transition-all mt-4">
                      Case Study <span className="material-symbols-outlined text-sm">east</span>
                    </button>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
