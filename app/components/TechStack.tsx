const stacks = [
  { icon: "deployed_code", name: "Frontend", tech: "React, Next.js, Tailwind" },
  { icon: "dns", name: "Backend", tech: "Python, FastAPI, SQLite" },
  { icon: "code", name: "Linguagens", tech: "JavaScript, TypeScript" },
  { icon: "web", name: "Web", tech: "HTML, CSS, DOM API" },
  { icon: "neurology", name: "Dados", tech: "Firebase Auth, Firestore" },
  { icon: "construction", name: "Apps", tech: "Tauri, Capacitor" },
]

export default function TechStack() {
  return (
    <section className="max-w-[1280px] mx-auto px-gutter py-stack-gap">
        <h2 className="text-headline-md mb-12 text-center text-on-surface">Tecnologias</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {stacks.map((s) => (
          <div
            key={s.name}
            className="glass-panel p-6 rounded-xl text-center group hover:border-primary/50 transition-colors"
          >
            <span className="material-symbols-outlined text-primary text-4xl mb-3 block">{s.icon}</span>
            <h4 className="font-label-caps text-label-caps mb-2">{s.name}</h4>
            <p className="text-[10px] text-outline font-code-sm">{s.tech}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
