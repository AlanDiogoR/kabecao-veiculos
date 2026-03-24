"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { LinkCard } from "@/components/LinkCard";
import { LINKS } from "@/lib/links";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.06, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-100 via-white to-white">
      <main className="mx-auto flex min-h-screen max-w-lg flex-col px-5 pb-10 pt-12 sm:px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 flex flex-col items-center"
        >
          <div className="relative h-36 w-36 sm:h-40 sm:w-40">
            <Image
              src="/logo.png"
              alt="Kabeção Veículos — revenda de carros e seminovos em Fartura, São Paulo"
              fill
              sizes="160px"
              className="object-contain drop-shadow-md"
              priority
            />
          </div>
          <p className="mt-4 max-w-sm text-center text-sm text-neutral-600">
            Carros e seminovos em Fartura/SP — fale com a equipe pelo WhatsApp ou
            acompanhe o estoque nas redes.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-1 flex-col gap-3"
        >
          {LINKS.map((link) => (
            <motion.div key={link.href + link.label} variants={item}>
              <LinkCard
                href={link.href}
                label={link.label}
                Icon={link.Icon}
                variant={link.variant}
                pulse={link.pulse}
                gtmEvent={link.gtmEvent}
              />
            </motion.div>
          ))}
        </motion.div>

        <footer className="mt-12 text-center text-xs text-neutral-500">
          Kabeção Veículos © 2026 - Todos os direitos reservados.
        </footer>
      </main>
    </div>
  );
}
