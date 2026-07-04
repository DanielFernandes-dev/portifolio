const footerLinks = [
  { label: "GitHub", href: "https://github.com/DanielFernandes-dev" },
  { label: "Email", href: "mailto:contato@danielfernandes.dev" },
]

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/10 mt-stack-gap py-12">
      <div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-gap">
        <div>
          <p className="font-label-caps text-label-caps text-secondary mb-4 uppercase tracking-tighter">
            Daniel Fernandes • Portfólio
          </p>
          <p className="font-code-sm text-code-sm text-outline">&copy; 2026 Daniel Fernandes</p>
        </div>
        <div className="flex flex-wrap gap-8 md:justify-end">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-code-sm text-outline hover:text-secondary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
