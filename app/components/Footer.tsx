import Link from "next/link"

const footerLinks = ["GitHub", "LinkedIn", "Architecture", "Privacy"]

export default function Footer() {
  return (
    <footer className="bg-surface-container-lowest border-t border-white/10 mt-stack-gap py-12">
      <div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 md:grid-cols-2 gap-stack-gap">
        <div>
          <p className="font-label-caps text-label-caps text-secondary mb-4 uppercase tracking-tighter">
            João Silva • Professional Portfolio
          </p>
          <p className="font-code-sm text-code-sm text-outline">&copy; 2026 Crafted with precision. v4.2.0-stable</p>
        </div>
        <div className="flex flex-wrap gap-8 md:justify-end">
          {footerLinks.map((link) => (
            <Link
              key={link}
              href="#"
              className="font-code-sm text-outline hover:text-secondary transition-colors"
            >
              {link}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}
