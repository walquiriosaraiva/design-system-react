import { create } from "@storybook/theming/create";

export const baseUrl = "https://github.com/walquiriosaraiva";
export const brandImage =
  "https://www.vhv.rs/dpng/d/590-5903330_reactjs-logo-react-js-transparent-icon-hd-png.png";
export const brandTitle = "Design System WSR";

export const wsrLight = create({
  base: "light",

  // Identidade
  brandTitle: brandTitle,
  brandUrl: baseUrl,
  brandImage: brandImage,

  // Cores
  // tom principal ajustado para um azul *ainda mais claro* (blue-100)
  colorPrimary: "#DBEAFE", // azul muito claro (Tailwind blue-100)
  // cor secundária mantida (dourado) para identidade
  colorSecondary: "#D4AF37", // dourado WSR

  // UI
  // fundo branco para sensação mais leve
  appBg: "#ffffff",
  // conteúdo com leve tom azulado quase branco
  appContentBg: "#fbfdff",
  // borda em azul suave
  appBorderColor: "#93C5FD", // Tailwind blue-300
  // texto primário em azul escuro mas menos intenso para ficar mais leve
  textColor: "#12324b",
  textInverseColor: "#ffffff",

  // Tipografia
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
});

export const wsrDark = create({
  base: "dark",

  brandTitle: brandTitle,
  brandUrl: baseUrl,
  brandImage: brandImage,

  colorPrimary: "#D4AF37",
  colorSecondary: "#003366",

  appBg: "#0f172a",
  appContentBg: "#1e293b",
  appBorderColor: "#D4AF37",
  textColor: "#f8fafc",
  textInverseColor: "#003366",
  fontBase: '"Open Sans", sans-serif',
  fontCode: "monospace",
});
