# Portfólio de Daniel Fernandes

Portfólio pessoal com apresentação, experiência prática em projetos, tecnologias usadas e os meses em que estive ativo no GitHub. A versão publicada está em [daniel-fernandes-dev.web.app](https://daniel-fernandes-dev.web.app).

## Conteúdo

- **Sobre mim:** estudante do 4º período de Ciências da Computação no CIESA, em Manaus, com conclusão prevista para 2028. A experiência vem dos projetos práticos, enquanto sigo aprendendo os fundamentos teóricos na graduação.
- **Projetos:** seis repositórios públicos com prévias, links para o código e tecnologias usadas em cada um. Diário do Dev e SANMD recebem destaque.
- **Tecnologias usadas:** ferramentas com as quais tive contato em projetos e estudos.
- **Meses ativos:** todos os meses identificados nas contribuições do perfil ou nos commits dos repositórios conferidos até 17/10/2026, em ordem cronológica. Os dados são uma fotografia dessa data, não uma contagem em tempo real.

## Tecnologias usadas neste site

- Astro 7 e TypeScript
- Tailwind CSS 4
- Firebase Analytics e Firebase Hosting

## Contato

[danielfernandesdeoliveira459@gmail.com](mailto:danielfernandesdeoliveira459@gmail.com)

## Executar localmente

Tenha Node.js e npm instalados. Na pasta do projeto, execute:

```bash
npm ci
npm run dev
```

Acesse [http://localhost:4321](http://localhost:4321).

## Comandos

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run check` | Verifica os componentes Astro e os tipos TypeScript. |
| `npm run lint` | Verifica o código com ESLint. |
| `npm run build` | Gera a versão estática na pasta `out/`. |
| `npm run preview` | Abre uma prévia local da versão gerada. |

## SEO e indexação

A página inicial tem título e descrição próprios, URL canônica, metadados Open Graph e Twitter e dados estruturados em JSON-LD para o perfil e os projetos. O arquivo `public/robots.txt` permite o rastreamento e aponta para `public/sitemap.xml`, que lista a URL canônica.

O Firebase Hosting redireciona `/index.html` para `/` com HTTP 301. Endereços inexistentes retornam HTTP 404 com a página `src/pages/404.astro`, marcada com `noindex`. Ao alterar o conteúdo, atualize também os metadados e a data do sitemap quando necessário. A indexação efetiva deve ser acompanhada no Google Search Console.

## Publicação

O Astro gera um site estático na pasta `out/`, publicada pelo Firebase Hosting. Com a Firebase CLI instalada e autenticada, execute:

```bash
npm ci
npm run build
firebase deploy --only hosting
```

O projeto Firebase configurado em `.firebaserc` é `daniel-fernandes-dev`. Confira o destino antes de executar o deploy com suas credenciais.

## Estrutura

- `src/pages/index.astro` reúne as seções da página.
- `src/pages/404.astro` apresenta a página de erro para endereços inexistentes.
- `src/components/` contém navegação, apresentação, projetos, tecnologias, meses ativos e rodapé.
- `src/layouts/Layout.astro` define o HTML, os metadados e os dados estruturados.
- `src/styles/global.css` reúne o tema e os estilos globais.
- `lib/projects.ts` reúne os repositórios públicos exibidos nos projetos e nos dados estruturados.
- `lib/activityMonths.ts` reúne os meses exibidos na seção **Meses ativos** e a data da última conferência.
- `public/projects/` contém as prévias visuais dos projetos exibidas nos cartões.
- `lib/firebase.ts` inicializa o Firebase Analytics no navegador, quando disponível.
- `firebase.json` configura o Firebase Hosting, incluindo o redirecionamento de `/index.html`.

Para atualizar a seção **Meses ativos**, confira novamente as contribuições e os commits, depois edite a lista e a data de conferência em `lib/activityMonths.ts`.
