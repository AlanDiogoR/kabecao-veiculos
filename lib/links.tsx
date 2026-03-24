import type { IconType } from "react-icons";
import {
  FaFacebook,
  FaInstagram,
  FaLocationDot,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa6";

export type LinkItem = {
  href: string;
  label: string;
  variant: "primary" | "secondary" | "social";
  pulse?: boolean;
  gtmEvent?: string;
  Icon: IconType;
};

export const LINKS: readonly LinkItem[] = [
  {
    href: "https://wa.me/5514997835263?text=Olá%20Júnior,%20vi%20o%20estoque%20da%20Kabeção%20Veículos%20e%20gostaria%20de%20mais%20informações!",
    label: "Falar com Júnior (Vendas)",
    variant: "primary",
    pulse: true,
    gtmEvent: "whatsapp_junior",
    Icon: FaWhatsapp,
  },
  {
    href: "https://wa.me/5514997534483?text=Olá%20Pio,%20gostaria%20de%20tirar%20uma%20dúvida%20sobre%20um%20veículo%20da%20Kabeção.",
    label: "Falar com Pio (Atendimento)",
    variant: "secondary",
    gtmEvent: "whatsapp_pio",
    Icon: FaWhatsapp,
  },
  {
    href: "https://www.instagram.com/kabecaoveiculosfartura?igsh=b3lwd2Y4aTFoZmN6",
    label: "Nosso Estoque no Instagram",
    variant: "social",
    gtmEvent: "social_instagram",
    Icon: FaInstagram,
  },
  {
    href: "https://www.tiktok.com/@kabecaoveiculos?_r=1&_t=ZS-94xWYFEvhRQ",
    label: "Novidades e Bastidores no TikTok",
    variant: "social",
    gtmEvent: "social_tiktok",
    Icon: FaTiktok,
  },
  {
    href: "https://www.facebook.com/share/17N5pW8r8N/",
    label: "Siga nossa Página",
    variant: "social",
    gtmEvent: "social_facebook",
    Icon: FaFacebook,
  },
  {
    href: "http://maps.google.com/?q=Kabeção+Veículos+Fartura+SP",
    label: "Venha nos Visitar (Google Maps)",
    variant: "social",
    gtmEvent: "maps_visit",
    Icon: FaLocationDot,
  },
];
