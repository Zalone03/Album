<h1 align="center">📸 Álbum de Fotos</h1>

<p align="center">
  Galeria de imagens que consome a API do Unsplash, com busca por termo, filtro por categoria e visualização ampliada.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white" alt="React" />
  <img src="https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Axios-1.x-5A29E4?logo=axios&logoColor=white" alt="Axios" />
  <img src="https://img.shields.io/badge/Unsplash-API-000000?logo=unsplash&logoColor=white" alt="Unsplash API" />
</p>

---
## 🔗 Demonstração Online: 
[https://zalone03.github.io/Album/](https://zalone03.github.io/Album/)

## 🎓 Sobre

Projeto desenvolvido durante o curso **"Aprenda a utilizar React JS profissionalmente, integrado com TypeScript, consumir APIs e utilizar libs do front-end"**.

O objetivo é praticar a criação de componentes em React, gerenciamento de estado com hooks e o consumo de uma API REST real.

## ✨ Funcionalidades

- 🔀 Fotos aleatórias ao abrir a página
- 🔎 Busca de fotos por palavra-chave
- 🗂️ Filtro por categoria (Natureza, Pessoas, Tecnologia, Animais e mais)
- 🖼️ Grade em estilo masonry, responsiva para desktop, tablet e celular
- 🔍 Clique em uma foto para vê-la ampliada

## 🛠️ Tecnologias

- [React](https://react.dev/) — interface e componentes
- [Vite](https://vite.dev/) — ambiente de desenvolvimento e build
- [Axios](https://axios-http.com/) — requisições HTTP
- [Unsplash API](https://unsplash.com/developers) — fonte das imagens

## 📁 Estrutura

```
src/
├── components/
│   ├── Searchbar.jsx      # campo de busca e seletor de categoria
│   ├── FotoList.jsx       # grade de fotos
│   ├── Foto.jsx           # card de cada foto
│   └── FotoAmpliada.jsx   # modal com a foto ampliada
├── App.jsx                # estado e chamadas à API
├── main.jsx
└── index.css
```

## 🚀 Como rodar

**Pré-requisitos:** Node.js 20+ e uma chave de acesso da [Unsplash API](https://unsplash.com/developers).

1. Clone o repositório e entre na pasta do projeto:

   ```bash
   cd Album
   ```

2. Instale as dependências:

   ```bash
   npm install
   ```

3. Crie um arquivo `.env` na raiz do projeto com a sua chave:

   ```env
   VITE_UNSPLASH_API_KEY=sua_chave_aqui
   ```

4. Inicie o servidor de desenvolvimento:

   ```bash
   npm run dev
   ```

5. Acesse `http://localhost:5173` no navegador.

## 📜 Scripts

| Comando           | Descrição                              |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Inicia o servidor de desenvolvimento   |
| `npm run build`   | Gera a versão de produção              |
| `npm run preview` | Visualiza o build de produção          |
| `npm run lint`    | Analisa o código com o ESLint          |

---

<p align="center">Feito por Guilherme Souza durante os estudos de React 💻</p>
