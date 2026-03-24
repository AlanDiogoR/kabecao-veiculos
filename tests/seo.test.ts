import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { buildJsonLdGraph } from "@/lib/seo";

describe("buildJsonLdGraph", () => {
  const prev = process.env.NEXT_PUBLIC_SITE_URL;

  beforeEach(() => {
    process.env.NEXT_PUBLIC_SITE_URL = "https://teste.local";
  });

  afterEach(() => {
    if (prev === undefined) {
      delete process.env.NEXT_PUBLIC_SITE_URL;
    } else {
      process.env.NEXT_PUBLIC_SITE_URL = prev;
    }
  });

  it("gera grafo com AutoDealer, WebSite e Organization", () => {
    const g = buildJsonLdGraph() as {
      "@graph": Array<{ "@type": string }>;
    };
    const types = g["@graph"].map((n) => n["@type"]);
    expect(types).toContain("AutoDealer");
    expect(types).toContain("WebSite");
    expect(types).toContain("Organization");
  });
});
