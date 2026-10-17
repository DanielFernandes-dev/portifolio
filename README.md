# Portfólio de Daniel Fernandes

Portfólio pessoal com apresentação, tecnologias, projetos e os meses em que estive ativo no GitHub. A versão publicada está em [daniel-fernandes-dev.web.app](https://daniel-fernandes-dev.web.app).

## Conteúdo

- **Projetos:** cartões de seis repositórios públicos, com prévias visuais e links para o código.
- **Tecnologias:** ferramentas usadas nos projetos e no desenvolvimento do site.
- **Meses ativos:** todos os meses identificados nas contribuições do perfil ou nos commits dos repositórios conferidos até 17/10/2026, em ordem cronológica. Os dados são uma fotografia dessa data, não uma contagem em tempo real.

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

O projeto usa `output: "export"` no Next.js, e o Firebase Hosting publica os arquivos da pasta `out/`. Com a Firebase CLI instalada e autenticada, execute:

```bash
npm ci
npm run build
firebase deploy --only hosting
```

O projeto Firebase configurado em `.firebaserc` é `daniel-fernandes-dev`. Confira o destino antes de executar o deploy com suas credenciais.

## Estrutura

- `app/page.tsx` reúne as seções da página.
- `app/components/` contém navegação, apresentação, projetos, tecnologias, meses ativos e rodapé.
- `lib/projects.ts` reúne os repositórios públicos exibidos nos projetos e nos dados estruturados.
- `lib/activityMonths.ts` reúne os meses exibidos na seção **Meses ativos** e a data da última conferência.
- `public/projects/` contém as prévias visuais dos projetos exibidas nos cartões.
- `lib/firebase.ts` inicializa o Firebase Analytics no navegador, quando disponível.
- `firebase.json` configura o Firebase Hosting para servir a exportação estática.

Para atualizar a seção **Meses ativos**, confira novamente as contribuições e os commits, depois edite a lista e a data de conferência em `lib/activityMonths.ts`.
