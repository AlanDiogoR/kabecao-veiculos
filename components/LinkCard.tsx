"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { LinkTone } from "@/lib/links";
import { FaFacebook, FaInstagram, FaTiktok, FaWhatsapp } from "react-icons/fa6";

type LinkCardProps = {
  href: string;
  label: string;
  tone: LinkTone;
  pulse?: boolean;
  gtmEvent?: string;
};

function pushDataLayer(event: string, linkLabel: string) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, link_label: linkLabel });
}

function BrandIcon({ tone }: { tone: LinkTone }) {
  switch (tone) {
    case "piu-hero":
      return (
        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white [&>svg]:h-7 [&>svg]:w-7">
          <FaWhatsapp aria-hidden />
        </span>
      );
    case "junior-outline":
      return (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25D366]/10 text-[#25D366] [&>svg]:h-6 [&>svg]:w-6">
          <FaWhatsapp aria-hidden />
        </span>
      );
    case "instagram":
      return (
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-[#f09433] via-[#e6683c] to-[#bc1888] p-[2px] shadow-sm">
          <span className="flex h-full w-full items-center justify-center rounded-[6px] bg-gradient-to-br from-[#f09433] via-[#dc2743] to-[#bc1888]">
            <FaInstagram className="h-6 w-6 text-white" aria-hidden />
          </span>
        </span>
      );
    case "tiktok":
      return (
        <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-black text-white [&>svg]:h-6 [&>svg]:w-6">
          <span
            className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-[#00f2ea]"
            aria-hidden
          />
          <span
            className="absolute -bottom-0.5 -left-0.5 h-2 w-2 rounded-full bg-[#ff0050]"
            aria-hidden
          />
          <FaTiktok aria-hidden />
        </span>
      );
    case "facebook":
      return (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#1877F2]/10 text-[#1877F2] [&>svg]:h-7 [&>svg]:w-7">
          <FaFacebook aria-hidden />
        </span>
      );
    case "maps":
      return (
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EA4335]/10 text-[#EA4335]">
          <MapPin className="h-6 w-6" strokeWidth={2.25} aria-hidden />
        </span>
      );
  }
}

function toneClasses(tone: LinkTone): string {
  switch (tone) {
    case "piu-hero":
      return "border-[#1ebe57] bg-[#25D366] text-white shadow-lg hover:shadow-xl focus-visible:outline-white";
    case "junior-outline":
      return "border-2 border-[#25D366] bg-white text-neutral-900 shadow-sm hover:shadow-md focus-visible:outline-[#25D366]";
    default:
      return "border border-neutral-200/90 bg-white text-neutral-900 shadow-sm hover:shadow-md focus-visible:outline-brand-blue";
  }
}

const pulseShadow = [
  "0 0 0 0 rgba(37, 211, 102, 0.55)",
  "0 0 0 14px rgba(37, 211, 102, 0)",
  "0 0 0 0 rgba(37, 211, 102, 0.55)",
] as const;

export function LinkCard({
  href,
  label,
  tone,
  pulse,
  gtmEvent,
}: LinkCardProps) {
  const isHero = tone === "piu-hero";
  const isPulseHero = Boolean(pulse && isHero);
  const base =
    "flex w-full items-center gap-4 rounded-xl text-left transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const padding = isHero ? "px-6 py-6 text-lg" : "px-5 py-4 text-base";

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${toneClasses(tone)} ${padding}`}
      animate={isPulseHero ? { boxShadow: [...pulseShadow] } : undefined}
      transition={
        isPulseHero
          ? { duration: 2.25, repeat: Infinity, ease: "easeInOut" }
          : { type: "spring", stiffness: 400, damping: 25 }
      }
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      onClick={() => {
        if (gtmEvent) pushDataLayer(gtmEvent, label);
      }}
    >
      <BrandIcon tone={tone} />
      <span className="min-w-0 flex-1 font-semibold leading-snug">{label}</span>
    </motion.a>
  );
}
