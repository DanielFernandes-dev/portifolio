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
            <a
              key={link.href}
              href={link.href}
              className="text-on-surface-variant font-body-base hover:text-primary transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
