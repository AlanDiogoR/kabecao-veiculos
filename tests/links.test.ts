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

  it("coloca Pio em destaque com pulse e mensagem de estoque", () => {
    const pio = LINKS.find((l) => l.gtmEvent === "whatsapp_pio");
    expect(pio?.tone).toBe("pio-hero");
    expect(pio?.pulse).toBe(true);
    expect(pio?.href).toMatch(/Pio/i);
    expect(pio?.href).toMatch(/estoque/i);
  });

  it("define Júnior como botão secundário sem pulse", () => {
    const junior = LINKS.find((l) => l.gtmEvent === "whatsapp_junior");
    expect(junior?.tone).toBe("junior-outline");
    expect(junior?.pulse).toBeUndefined();
    expect(junior?.href).toMatch(/Júnior/i);
  });

  it("usa URL de maps sem sufixo SP quando solicitado", () => {
    const maps = LINKS.find((l) => l.tone === "maps");
    expect(maps?.href).toContain("Kabeção+Veículos+Fartura");
    expect(maps?.href).not.toContain("Fartura+SP");
  });
});
