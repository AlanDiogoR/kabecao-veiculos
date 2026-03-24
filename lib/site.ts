export const DEFAULT_SITE_URL = "https://kabecao-veiculos.netlify.app";

export function getSiteUrl(): string {
  return process.env.NEXT_PUBLIC_SITE_URL ?? DEFAULT_SITE_URL;
}
