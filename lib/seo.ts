import { getSiteUrl } from "@/lib/site";

export const SITE_NAME = "Kabeção Veículos";

export const SITE_TITLE =
  "Kabeção Veículos | Carros e Seminovos em Fartura/SP";

export const SITE_DESCRIPTION =
  "Encontre seu próximo carro na Kabeção Veículos. Melhores taxas de financiamento, procedência garantida e atendimento especializado em Fartura e região.";

export const SITE_KEYWORDS = [
  "carros em fartura",
  "revenda de veículos",
  "comprar seminovos",
  "financiamento de carros sp",
  "Kabeção Veículos",
  "seminovos Fartura",
  "loja de carros Fartura SP",
] as const;

export const SOCIAL_PROFILES = [
  "https://www.instagram.com/kabecaoveiculosfartura",
  "https://www.tiktok.com/@kabecaoveiculos",
  "https://www.facebook.com/share/17N5pW8r8N/",
] as const;

export function buildJsonLdGraph() {
  const url = getSiteUrl();
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "AutoDealer",
        "@id": `${url}/#dealership`,
        name: SITE_NAME,
        url,
        description: SITE_DESCRIPTION,
        image: `${url}/logo.png`,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Fartura",
          addressRegion: "SP",
          addressCountry: "BR",
        },
        areaServed: "Fartura e região",
        sameAs: [...SOCIAL_PROFILES],
      },
      {
        "@type": "WebSite",
        "@id": `${url}/#website`,
        url,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        inLanguage: "pt-BR",
        publisher: { "@id": `${url}/#dealership` },
      },
      {
        "@type": "Organization",
        "@id": `${url}/#organization`,
        name: SITE_NAME,
        url,
        logo: `${url}/logo.png`,
        sameAs: [...SOCIAL_PROFILES],
      },
    ],
  };
}
