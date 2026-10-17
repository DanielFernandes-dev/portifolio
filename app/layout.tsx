import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { projects } from "@/lib/projects"
import "./globals.css"

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
})

const siteUrl = "https://daniel-fernandes-dev.web.app"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Daniel Fernandes | Portfólio — Desenvolvedor em Formação",
  description:
    "Conheça meus projetos em desenvolvimento web, aplicativos e jogos. React, TypeScript, Firebase, Python e JavaScript.",
  keywords: [
    "Daniel Fernandes",
    "portfólio",
    "desenvolvedor",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML",
    "CSS",
    "desenvolvimento web",
    "front-end",
    "Firebase",
    "Python",
    "FastAPI",
    "Tauri",
    "GitHub",
  ],
  authors: [{ name: "Daniel Fernandes" }],
  creator: "Daniel Fernandes",
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Daniel Fernandes | Portfólio",
    description:
      "Conheça meus projetos em desenvolvimento web, aplicativos e jogos. React, TypeScript, Firebase, Python e JavaScript.",
    url: siteUrl,
    siteName: "Daniel Fernandes Portfólio",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/239253498?v=4",
        width: 460,
        height: 460,
        alt: "Daniel Fernandes",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Daniel Fernandes | Portfólio",
    description:
      "Conheça meus projetos e os meses de atividade no GitHub.",
    images: ["https://avatars.githubusercontent.com/u/239253498?v=4"],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  name: "Daniel Fernandes",
                  url: siteUrl,
                  image: "https://avatars.githubusercontent.com/u/239253498?v=4",
                  sameAs: ["https://github.com/DanielFernandes-dev", "https://chronokairo.com.br"],
                  knowsAbout: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
                  memberOf: {
                    "@type": "Organization",
                    name: "Chronokairo",
                    url: "https://chronokairo.com.br",
                  },
                },
                {
                  "@type": "WebSite",
                  url: siteUrl,
                  name: "Daniel Fernandes Portfólio",
                  description:
                    "Portfólio pessoal com projetos e meses de atividade no GitHub.",
                  inLanguage: "pt-BR",
                },
                {
                  "@type": "ItemList",
                  name: "Projetos no GitHub",
                  description: "Repositórios públicos de Daniel Fernandes",
                  url: `${siteUrl}/#projects`,
                  numberOfItems: projects.length,
                  itemListElement: projects.map((project, index) => ({
                    "@type": "ListItem",
                    position: index + 1,
                    item: {
                      "@type": "SoftwareSourceCode",
                      name: project.title,
                      url: project.url,
                      programmingLanguage: project.language,
                    },
                  })),
                },
              ],
            }),
          }}
        />
      </head>
      <body className="bg-background text-on-background antialiased selection:bg-primary selection:text-on-primary">
        {children}
      </body>
    </html>
  )
}
