import type { ComponentProps } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LinkCard } from "@/components/LinkCard";
import { FaWhatsapp } from "react-icons/fa6";

vi.mock("framer-motion", () => ({
  motion: {
    a: ({
      children,
      whileHover: _h,
      whileTap: _t,
      transition: _tr,
      ...props
    }: ComponentProps<"a"> & { whileHover?: unknown; whileTap?: unknown; transition?: unknown }) => (
      <a {...props}>{children}</a>
    ),
  },
}));

describe("LinkCard", () => {
  it("renderiza link com href e rótulo acessível", () => {
    render(
      <LinkCard
        href="https://wa.me/5514999999999"
        label="Falar com Vendas"
        Icon={FaWhatsapp}
        variant="primary"
      />,
    );
    const link = screen.getByRole("link", { name: /Falar com Vendas/i });
    expect(link).toHaveAttribute("href", "https://wa.me/5514999999999");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
  });

  it("envia evento ao dataLayer quando gtmEvent está definido", async () => {
    const user = userEvent.setup();
    const dataLayer: Record<string, unknown>[] = [];
    const win = window as Window & { dataLayer?: Record<string, unknown>[] };
    win.dataLayer = dataLayer;

    render(
      <LinkCard
        href="https://example.com"
        label="Clique"
        Icon={FaWhatsapp}
        variant="social"
        gtmEvent="test_event"
      />,
    );

    await user.click(screen.getByRole("link", { name: /Clique/i }));
    expect(dataLayer).toContainEqual({
      event: "test_event",
      link_label: "Clique",
    });
  });
});
