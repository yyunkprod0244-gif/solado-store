import { createGlobalStyle } from "styled-components";

export const temaEscuro = {
  fundo: "#0f1115",
  superficie: "#1a1d24",
  texto: "#f1f3f5",
  textoSuave: "#9aa0aa",
  borda: "#2a2e38",
  destaque: "#7c5cff",
  sombra: "0 20px 40px rgba(0,0,0,.45)",
};

export const temaClaro = {
  fundo: "#f4f5f8",
  superficie: "#ffffff",
  texto: "#14161a",
  textoSuave: "#6b7280",
  borda: "#e3e5ea",
  destaque: "#5b3df5",
  sombra: "0 20px 40px rgba(20,22,26,.12)",
};

export const GlobalStyle = createGlobalStyle`
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body {
    font-family: "Poppins", sans-serif;
    background: ${({ theme }) => theme.fundo};
    color: ${({ theme }) => theme.texto};
    transition: background .3s ease, color .3s ease;
  }
`;
