export type LinkTone =
  | "pio-hero"
  | "junior-outline"
  | "instagram"
  | "tiktok"
  | "facebook"
  | "maps";

export type LinkItem = {
  href: string;
  label: string;
  tone: LinkTone;
  pulse?: boolean;
  gtmEvent?: string;
};

export const LINKS: readonly LinkItem[] = [
  {
    href: "https://wa.me/5514997534483?text=Olá%20Pio,%20vi%20o%20estoque%20da%20Kabeção%20Veículos%20e%20gostaria%20de%20mais%20informações!",
    label: "Falar com Pio (Vendas)",
    tone: "pio-hero",
    pulse: true,
    gtmEvent: "whatsapp_pio",
  },
  {
    href: "https://wa.me/5514997835263?text=Olá%20Júnior,%20vi%20o%20estoque%20da%20Kabeção%20Veículos%20e%20gostaria%20de%20mais%20informações!",
    label: "Falar com Júnior (Vendas)",
    tone: "junior-outline",
    gtmEvent: "whatsapp_junior",
  },
  {
    href: "https://www.instagram.com/kabecaoveiculosfartura?igsh=b3lwd2Y4aTFoZmN6",
    label: "Nosso Estoque no Instagram",
    tone: "instagram",
    gtmEvent: "social_instagram",
  },
  {
    href: "https://www.tiktok.com/@kabecaoveiculos?_r=1&_t=ZS-94xWYFEvhRQ",
    label: "Novidades e Bastidores no TikTok",
    tone: "tiktok",
    gtmEvent: "social_tiktok",
  },
  {
    href: "https://www.facebook.com/share/17N5pW8r8N/",
    label: "Siga nossa Página",
    tone: "facebook",
    gtmEvent: "social_facebook",
  },
  {
    href: "http://maps.google.com/?q=Kabeção+Veículos+Fartura",
    label: "Venha à Loja (Google Maps)",
    tone: "maps",
    gtmEvent: "maps_visit",
  },
];
