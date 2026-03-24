import { describe, expect, it } from "vitest";
import { LINKS } from "@/lib/links";

describe("LINKS", () => {
  it("mantém seis canais de contato", () => {
    expect(LINKS).toHaveLength(6);
  });

  it("inclui dois links de WhatsApp com wa.me", () => {
    const whatsapp = LINKS.filter((l) => l.href.includes("wa.me"));
    expect(whatsapp).toHaveLength(2);
  });

  it("define mensagem pré-preenchida para Júnior", () => {
    const junior = LINKS.find((l) => l.gtmEvent === "whatsapp_junior");
    expect(junior?.href).toMatch(/Júnior/i);
    expect(junior?.pulse).toBe(true);
  });
});
