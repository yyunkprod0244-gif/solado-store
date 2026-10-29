# Solado Store

Exercício de CSS-in-JS com **Styled Components**: componente reutilizável `CardProduto` com botão que muda de cor pela prop `adicionado` (verde `#198754` / cinza `#6c757d`).

## Como rodar

```bash
npm install
npm run dev
```

## Fotos

Coloque as imagens em `public/img/` e preencha `imagem: "/img/tenis1.jpg"` no array `produtos` do `src/App.jsx`. Sugestões de busca: Unsplash, Pexels e Pixabay (`sneakers`, `running shoes`).

## Estrutura

- `src/components/CardProduto.jsx`: componente + estilos
- `src/styles/GlobalStyle.js`: estilo global e temas claro/escuro
- `src/App.jsx`: página, botão de tema e lista de produtos
