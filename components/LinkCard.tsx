"use client";

import { motion } from "framer-motion";
import type { IconType } from "react-icons";

type LinkCardProps = {
  href: string;
  label: string;
  Icon: IconType;
  variant: "primary" | "secondary" | "social";
  pulse?: boolean;
  gtmEvent?: string;
};

function pushDataLayer(event: string, linkLabel: string) {
  if (typeof window === "undefined") return;
  const w = window as Window & { dataLayer?: Record<string, unknown>[] };
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, link_label: linkLabel });
}

export function LinkCard({
  href,
  label,
  Icon,
  variant,
  pulse,
  gtmEvent,
}: LinkCardProps) {
  const base =
    "flex w-full items-center gap-4 rounded-xl border px-5 py-4 text-left shadow-md transition-shadow focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const styles = {
    primary:
      "border-brand-red/30 bg-gradient-to-r from-brand-red to-[#c41820] text-white hover:shadow-xl focus-visible:outline-white",
    secondary:
      "border-brand-blue/20 bg-white text-brand-blue hover:shadow-xl focus-visible:outline-brand-blue",
    social:
      "border-neutral-200/80 bg-white text-neutral-800 hover:shadow-xl focus-visible:outline-brand-blue",
  };

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles[variant]} ${pulse ? "animate-pulse-soft" : ""}`}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      onClick={() => {
        if (gtmEvent) pushDataLayer(gtmEvent, label);
      }}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg [&>svg]:h-6 [&>svg]:w-6 ${
          variant === "primary" ? "bg-white/15 text-white" : "bg-black/5 text-current"
        }`}
      >
        <Icon aria-hidden />
      </span>
      <span className="min-w-0 flex-1 font-semibold leading-snug">{label}</span>
    </motion.a>
  );
}
