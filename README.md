# Kabeção Veículos — Linktree

Landing page estilo Linktree para a revenda **Kabeção Veículos** (Fartura/SP), focada em conversão para WhatsApp e SEO local.

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [react-icons](https://react-icons.github.io/react-icons/) (ícones oficiais de marcas: WhatsApp, Instagram, TikTok, Facebook, localização)
- [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/)

## Requisitos

- Node.js 20 LTS (recomendado)
- npm 10+

## Como rodar

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

| Comando       | Descrição                          |
| ------------- | ---------------------------------- |
| `npm run dev` | Servidor de desenvolvimento        |
| `npm run build` | Build de produção              |
| `npm run start` | Servidor após `build`          |
| `npm run lint` | ESLint (Next.js)                 |
| `npm run test` | Testes (Vitest, modo watch)      |
| `npm run test:ci` | Testes uma vez (CI)          |

## Variáveis de ambiente

Copie `.env.example` para `.env.local` e ajuste:

| Variável | Uso |
| -------- | --- |
| `NEXT_PUBLIC_SITE_URL` | URL canônica do site (obrigatória em produção para Open Graph e JSON-LD absolutos). Ex.: `https://seudominio.netlify.app` |
| `NEXT_PUBLIC_GTM_ID` | ID do Google Tag Manager (opcional) |
| `NEXT_PUBLIC_FB_PIXEL_ID` | ID do pixel Meta (opcional) |

## Deploy (Netlify)

O repositório inclui `netlify.toml` com o plugin oficial `@netlify/plugin-nextjs`. Na Netlify:

1. Conecte o repositório.
2. Defina **Build command**: `npm run build`.
3. Defina as variáveis de ambiente (principalmente `NEXT_PUBLIC_SITE_URL`).
4. O deploy contínuo roda a cada push na branch configurada.

## CI/CD

- **GitHub Actions** (`.github/workflows/ci.yml`): em push e pull requests para `main`/`master`, executa `npm ci`, `lint`, `test:ci` e `build`.
- **Netlify**: build e publicação após merge (CD).

Mantenha o `package-lock.json` versionado para `npm ci` funcionar no CI.

## Testes

Os testes cobrem:

- `LinkCard`: acessibilidade do link, `dataLayer` ao clicar (GTM).
- `LINKS`: quantidade de canais e regras dos links de WhatsApp.
- `buildJsonLdGraph`: presença dos tipos Schema.org esperados.

## SEO

- Metadados centralizados em `lib/seo.ts` (título, descrição, keywords).
- `metadataBase`, Open Graph, Twitter Card, `robots`, `sitemap.xml` (`app/sitemap.ts`), `robots.txt` (`app/robots.ts`).
- JSON-LD com `@graph`: `AutoDealer`, `WebSite`, `Organization` e `sameAs` das redes.
- `app/manifest.ts` para PWA leve (nome, cores, ícone).

## Estrutura útil

```
app/           Rotas e metadados (layout, page, sitemap, robots, manifest)
components/    UI (LinkCard, Analytics)
lib/           Links, SEO, URL base
public/        `logo.png` e assets estáticos
tests/         Testes Vitest
```

## EditorConfig

O projeto segue `.editorconfig` (indentação 2 espaços, CRLF, UTF-8). Ajuste o editor para respeitar o arquivo.

## Licença

Uso privado da Kabeção Veículos.
