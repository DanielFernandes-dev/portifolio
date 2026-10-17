# Portfólio de Daniel Fernandes

Portfólio pessoal com apresentação, tecnologias, projetos e uma linha do tempo da atividade no GitHub. A versão publicada está em [daniel-fernandes-dev.web.app](https://daniel-fernandes-dev.web.app).

## Tecnologias

- Next.js 16, React 19 e TypeScript
- Tailwind CSS 4
- Firebase Analytics e Firebase Hosting

## Executar localmente

Tenha Node.js e npm instalados. Na pasta do projeto, execute:

```bash
npm ci
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

## Comandos

| Comando | Função |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run lint` | Verifica o código com ESLint. |
| `npm run build` | Gera a versão estática na pasta `out/`. |

## Publicação

O projeto usa `output: "export"` no Next.js, e o Firebase Hosting publica os arquivos da pasta `out/`. Para publicar em um projeto Firebase ao qual você tenha acesso:

```bash
npm ci
npm run build
npx firebase-tools deploy --only hosting
```

O projeto Firebase configurado em `.firebaserc` é `daniel-fernandes-dev`. Confira o destino antes de executar o deploy com suas credenciais.

## Estrutura

- `app/page.tsx` reúne as seções da página.
- `app/components/` contém navegação, apresentação, projetos, tecnologias, jornada e rodapé.
- `lib/projects.ts` reúne os repositórios públicos exibidos nos projetos, na jornada e nos dados estruturados.
- `public/projects/` contém as prévias visuais dos projetos exibidas nos cartões.
- `lib/firebase.ts` inicializa o Firebase Analytics no navegador, quando disponível.
- `firebase.json` configura o Firebase Hosting para servir a exportação estática.

A seção **Minha Jornada** mostra os meses com commits no histórico deste portfólio e consulta a API pública do GitHub no navegador para listar todos os meses com commits nos repositórios de `lib/projects.ts`, em ordem de atividade. A consulta percorre as páginas de commits de cada repositório. Se ela falhar ou não houver dados, a página mostra uma mensagem no lugar da lista pública.
