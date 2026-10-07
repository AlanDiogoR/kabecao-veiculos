# Kabeção Veículos — Página de links

Landing page no estilo Linktree feita para a revenda de veículos **Kabeção Veículos** (Fartura/SP). O foco é levar o visitante ao WhatsApp dos vendedores e melhorar o SEO local da loja.

Projeto real para um cliente, com testes automatizados, CI no GitHub Actions e configuração de deploy na Netlify.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** para estilos e **Framer Motion** para animações de entrada
- **react-icons** (ícones de marcas) e **lucide-react**
- **Vitest** + **Testing Library** (jsdom)
- **ESLint** (`eslint-config-next`)
- **Netlify** com `@netlify/plugin-nextjs`

## Funcionalidades

- **Cartões de contato animados** (`components/LinkCard.tsx`) para 6 canais: dois vendedores no WhatsApp com mensagem pré-preenchida, Instagram, TikTok, Facebook e localização no Google Maps
- **Destaque visual** (efeito pulse) no contato principal de vendas
- **Rastreamento de cliques:** cada clique envia um evento ao `dataLayer` (Google Tag Manager)
- **Analytics opcional:** GTM e Meta Pixel carregados só se os IDs estiverem configurados (`components/Analytics.tsx`)
- **SEO técnico** (`lib/seo.ts`):
  - metadados centralizados, Open Graph, Twitter Card e `metadataBase`
  - `sitemap.xml` (`app/sitemap.ts`) e `robots.txt` (`app/robots.ts`)
  - JSON-LD com `@graph`: `AutoDealer` (com endereço), `WebSite` e `Organization`, com `sameAs` das redes sociais
- **Manifesto PWA leve** (`app/manifest.ts`) e favicon SVG

## Como rodar

Requisitos: Node.js 20 LTS e npm 10+.

```bash
npm install
cp .env.example .env.local   # opcional em desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000).

### Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção |
| `npm run start` | Servidor após o build |
| `npm run lint` | ESLint (Next.js) |
| `npm run test` | Vitest em modo watch |
| `npm run test:ci` | Vitest em execução única (usado no CI) |

### Variáveis de ambiente

Definidas em `.env.example`:

| Variável | Uso |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL canônica do site (necessária em produção para Open Graph e JSON-LD com URLs absolutas) |
| `NEXT_PUBLIC_GTM_ID` | ID do Google Tag Manager (opcional) |
| `NEXT_PUBLIC_FB_PIXEL_ID` | ID do Meta Pixel (opcional) |

## Testes

Os testes ficam em `tests/` e cobrem:

- `LinkCard`: acessibilidade do link e envio do evento ao `dataLayer` no clique
- `LINKS`: quantidade de canais, links de WhatsApp via `wa.me` e destaque do vendedor principal
- `buildJsonLdGraph`: presença dos tipos Schema.org esperados

## CI/CD

- **GitHub Actions** (`.github/workflows/ci.yml`): em push e pull request para `main`/`master`, roda `npm ci`, `lint`, `test:ci` e `build` no Node 20.
- **Netlify** (`netlify.toml`): build com `npm run build` e o plugin oficial do Next.js. Para publicar, conecte o repositório na Netlify e defina `NEXT_PUBLIC_SITE_URL`.

Mantenha o `package-lock.json` versionado para o `npm ci` funcionar no CI.

## Estrutura

```
app/          Rotas e metadados (layout, page, sitemap, robots, manifest, ícone)
components/   UI (LinkCard, Analytics)
lib/          Links, SEO e URL base do site
public/       Logo e assets estáticos
tests/        Testes Vitest
```

O projeto segue o `.editorconfig` (indentação de 2 espaços, CRLF, UTF-8).

## Licença

Uso privado da Kabeção Veículos.
