import { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, temaClaro, temaEscuro } from "./styles/GlobalStyle";
import CardProduto from "./components/CardProduto";

const produtos = [
  { id: 1, nome: "Solado Runner X", preco: 399.9, emoji: "👟", imagem: "img/runner.webp" },
  { id: 2, nome: "Solado Urban Low", preco: 289.9, emoji: "👞", imagem: "img/urban.webp" },
  { id: 3, nome: "Solado Trail Pro", preco: 459.0, emoji: "🥾", imagem: "img/trail.webp" },
  { id: 4, nome: "Solado Court Classic", preco: 329.5, emoji: "👟", imagem: "img/court.webp" },
];

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 5%;
  border-bottom: 1px solid ${({ theme }) => theme.borda};
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 800;
  span { color: ${({ theme }) => theme.destaque}; }
`;

const BotaoTema = styled.button`
  padding: 0.6rem 1.1rem;
  border-radius: 999px;
  border: 1px solid ${({ theme }) => theme.borda};
  background: ${({ theme }) => theme.superficie};
  color: ${({ theme }) => theme.texto};
  font-family: inherit;
  cursor: pointer;
  transition: transform 0.2s ease;
  &:hover { transform: scale(1.06); }
`;

const Hero = styled.section`
  text-align: center;
  padding: 4rem 5% 2rem;

  h2 { font-size: clamp(2rem, 6vw, 3.5rem); font-weight: 800; }
  p { color: ${({ theme }) => theme.textoSuave}; margin-top: 0.8rem; }
`;

const Grid = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.6rem;
  padding: 2rem 5% 4rem;
  perspective: 1000px;
`;

const Rodape = styled.footer`
  text-align: center;
  padding: 1.5rem;
  color: ${({ theme }) => theme.textoSuave};
  border-top: 1px solid ${({ theme }) => theme.borda};
`;

export default function App() {
  const [escuro, setEscuro] = useState(true);
  const [adicionados, setAdicionados] = useState({});

  const alternar = (id) =>
    setAdicionados((atual) => ({ ...atual, [id]: !atual[id] }));

  return (
    <ThemeProvider theme={escuro ? temaEscuro : temaClaro}>
      <GlobalStyle />
      <Header>
        <Logo>Solado<span>.</span>Store</Logo>
        <BotaoTema onClick={() => setEscuro(!escuro)}>
          {escuro ? "☀️ Tema claro" : "🌙 Tema escuro"}
        </BotaoTema>
      </Header>

      <Hero>
        <h2>Pise firme. Vá longe.</h2>
        <p>Os tênis mais estilosos, num só lugar.</p>
      </Hero>

      <Grid>
        {produtos.map((p) => (
          <CardProduto
            key={p.id}
            {...p}
            adicionado={!!adicionados[p.id]}
            onToggle={() => alternar(p.id)}
          />
        ))}
      </Grid>

      <Rodape>© 2026 Douglas Henrique · Solado Store</Rodape>
    </ThemeProvider>
  );
}
