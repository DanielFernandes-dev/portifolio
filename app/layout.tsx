import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
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
    "Conheça meus projetos e minha jornada como desenvolvedor. HTML, CSS, JavaScript, TypeScript, React e Next.js.",
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
    "programador iniciante",
    "desenvolvimento web",
    "front-end",
    "Firebase",
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
      "Conheça meus projetos e minha jornada como desenvolvedor. HTML, CSS, JavaScript, TypeScript, React e Next.js.",
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
      "Conheça meus projetos e minha jornada como desenvolvedor.",
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
                  sameAs: ["https://github.com/DanielFernandes-dev"],
                  knowsAbout: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js"],
                },
                {
                  "@type": "WebSite",
                  url: siteUrl,
                  name: "Daniel Fernandes Portfólio",
                  description:
                    "Portfólio pessoal com projetos e jornada como desenvolvedor.",
                  inLanguage: "pt-BR",
                },
                {
                  "@type": "ItemList",
                  name: "Projetos no GitHub",
                  description: "Repositórios públicos de Daniel Fernandes",
                  url: `${siteUrl}/#projects`,
                  numberOfItems: 5,
                  itemListElement: [
                    {
                      "@type": "ListItem",
                      position: 1,
                      item: {
                        "@type": "SoftwareSourceCode",
                        name: "lotofacil_app",
                        url: "https://github.com/DanielFernandes-dev/lotofacil_app",
                        programmingLanguage: "TypeScript",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 2,
                      item: {
                        "@type": "SoftwareSourceCode",
                        name: "redator",
                        url: "https://github.com/DanielFernandes-dev/redator",
                        programmingLanguage: "JavaScript",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 3,
                      item: {
                        "@type": "SoftwareSourceCode",
                        name: "site-html",
                        url: "https://github.com/DanielFernandes-dev/site-html",
                        programmingLanguage: "HTML",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 4,
                      item: {
                        "@type": "SoftwareSourceCode",
                        name: "teste-react",
                        url: "https://github.com/DanielFernandes-dev/teste-react",
                        programmingLanguage: "JavaScript",
                      },
                    },
                    {
                      "@type": "ListItem",
                      position: 5,
                      item: {
                        "@type": "SoftwareSourceCode",
                        name: "portifolio",
                        url: "https://github.com/DanielFernandes-dev/portifolio",
                        programmingLanguage: "TypeScript",
                      },
                    },
                  ],
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
