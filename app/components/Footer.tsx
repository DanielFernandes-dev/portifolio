export default function Footer() {
  return (
    <footer id="footer" className="bg-surface-container-lowest border-t border-white/10 mt-stack-gap py-12">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <p className="font-label-caps text-label-caps text-secondary mb-4 uppercase tracking-tighter">
              Daniel Fernandes • Portfólio
            </p>
            <p className="font-code-sm text-code-sm text-outline">&copy; 2026 Daniel Fernandes</p>
          </div>
          <div className="space-y-3">
            <p className="font-label-caps text-label-caps text-outline mb-2">Contato</p>
            <a
              href="mailto:239253498+DanielFernandes-dev@users.noreply.github.com"
              className="flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant hover:text-secondary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              239253498+DanielFernandes-dev@users.noreply.github.com
            </a>
            <a
              href="tel:+559294498933"
              className="flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant hover:text-secondary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">phone</span>
              (+55) 92 9449-8933
            </a>
          </div>
          <div className="space-y-3">
            <p className="font-label-caps text-label-caps text-outline mb-2">Redes</p>
            <a
              href="https://github.com/DanielFernandes-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-code-sm text-code-sm text-on-surface-variant hover:text-secondary transition-colors"
            >
              <span className="material-symbols-outlined text-sm">code</span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
