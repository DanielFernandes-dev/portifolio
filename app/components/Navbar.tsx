import Link from "next/link"

const navLinks = [
  { href: "#projects", label: "Projetos" },
  { href: "#timeline", label: "Jornada" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-background/70 backdrop-blur-md border-b border-white/10">
      <div className="flex justify-between items-center max-w-[1280px] mx-auto px-gutter h-16">
        <span className="text-headline-md font-bold text-primary">Daniel Fernandes</span>
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-on-surface-variant font-body-base hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" aria-label="Language">
            language
          </button>
          <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors" aria-label="Dark mode">
            dark_mode
          </button>
        </div>
      </div>
    </nav>
  )
}
