import styled from "styled-components";

/* ---------- Estilos (nomeados por componente) ---------- */

const CardWrapper = styled.article`
  background: ${({ theme }) => theme.superficie};
  border: 1px solid ${({ theme }) => theme.borda};
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${({ theme }) => theme.sombra};
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px) rotateX(2deg);
  }
`;

const CardImagem = styled.div`
  height: 180px;
  display: grid;
  place-items: center;
  font-size: 4rem;
  background: ${({ $imagem, theme }) =>
    $imagem
      ? `url(${$imagem}) center/cover no-repeat`
      : `linear-gradient(135deg, ${theme.destaque}, transparent)`};
`;

const CardCorpo = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const CardNome = styled.h3`
  font-size: 1.1rem;
  font-weight: 600;
`;

const CardPreco = styled.p`
  font-size: 1.4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.destaque};
`;

/* Botão com cor dinâmica pela prop `adicionado` */
const BotaoCarrinho = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== "adicionado",
})`
  margin-top: 0.6rem;
  padding: 0.85rem 1rem;
  border: none;
  border-radius: 12px;
  font-family: inherit;
  font-weight: 600;
  font-size: 0.95rem;
  color: #fff;
  cursor: pointer;
  background-color: ${({ adicionado }) => (adicionado ? "#198754" : "#6c757d")};
  transition: background-color 0.25s ease, transform 0.15s ease;

  &:hover { filter: brightness(1.1); }
  &:active { transform: scale(0.97); }
`;

/* ---------- Componente reutilizável ---------- */

export default function CardProduto({ nome, preco, imagem, emoji = "👟", adicionado, onToggle }) {
  return (
    <CardWrapper>
      <CardImagem $imagem={imagem}>{!imagem && emoji}</CardImagem>
      <CardCorpo>
        <CardNome>{nome}</CardNome>
        <CardPreco>R$ {preco.toFixed(2).replace(".", ",")}</CardPreco>
        <BotaoCarrinho adicionado={adicionado} onClick={onToggle}>
          {adicionado ? "✓ Adicionado" : "Adicionar ao carrinho"}
        </BotaoCarrinho>
      </CardCorpo>
    </CardWrapper>
  );
}
