import Link from "next/link"

export default function Contact() {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap" id="contact">
      <div className="glass-panel rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <h2 className="text-display-lg-mobile md:text-3xl text-on-surface mb-6">
            Vamos construir algo incrível?
          </h2>
          <p className="font-body-base text-on-surface-variant mb-12">
            Disponível para novos projetos desafiadores e parcerias estratégicas.
          </p>
          <div className="space-y-6">
            <Link href="mailto:contato@joaosilva.dev" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-on-primary transition-all">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <span className="font-code-sm">contato@joaosilva.dev</span>
            </Link>
            <Link href="#" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary group-hover:bg-secondary group-hover:text-on-secondary transition-all">
                <span className="material-symbols-outlined">calendar_today</span>
              </div>
              <span className="font-code-sm">Agendar via Calendly</span>
            </Link>
          </div>
        </div>
        <div className="bg-surface-container-high p-8 md:p-16 border-l border-white/10">
          <form className="space-y-6">
            <div>
              <label className="font-label-caps text-label-caps text-outline block mb-2">Seu Nome</label>
              <input
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-all font-body-base py-2 placeholder:text-outline-variant"
                placeholder="Ex: Maria Souza"
                type="text"
              />
            </div>
            <div>
              <label className="font-label-caps text-label-caps text-outline block mb-2">Email</label>
              <input
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-all font-body-base py-2 placeholder:text-outline-variant"
                placeholder="maria@empresa.com"
                type="email"
              />
            </div>
            <div>
              <label className="font-label-caps text-label-caps text-outline block mb-2">Mensagem</label>
              <textarea
                className="w-full bg-transparent border-b border-outline-variant focus:border-primary focus:ring-0 transition-all font-body-base py-2 placeholder:text-outline-variant resize-none"
                placeholder="Conte um pouco sobre seu projeto..."
                rows={4}
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-on-primary py-4 rounded-lg font-bold hover:shadow-lg hover:shadow-primary/20 transition-all flex items-center justify-center gap-2"
            >
              Enviar Mensagem <span className="material-symbols-outlined">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
