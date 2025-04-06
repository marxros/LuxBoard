# 🌞 Lumi Energia - Frontend

Este projeto é a interface web do sistema de teste **Lumi Energia**, focado na gestão e visualização de faturas de energia elétrica, consumo e compensação de energia.

---

## 🚀 Tecnologias utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
- [Heroicons](https://heroicons.com/)
- [React DatePicker](https://reactdatepicker.com/)

---

## 📦 Pré-requisitos

Antes de começar, você vai precisar ter instalado:

- [Node.js](https://nodejs.org/) (recomendado: versão 18 ou superior)
- [Yarn](https://yarnpkg.com/) ou [npm](https://www.npmjs.com/)

---

## 🛠️ Como rodar o projeto

1. **Clone o repositório:**

```bash
git clone https://github.com/marxros/LuxBoard.git
cd LuxBoard
```

2. **Instale as dependências:**

```bash
# Com Yarn
yarn install

# ou com NPM
npm install
```

3. **Configure as variáveis de ambiente:**

Crie um arquivo `.env` na raiz do projeto com o conteúdo abaixo:

```env
VITE_API_URL=http://localhost:3000
```

> Altere o valor da variável `VITE_API_URL` conforme a URL onde sua API está rodando.

4. **Inicie o servidor de desenvolvimento:**

```bash
# Com Yarn
yarn dev

# ou com NPM
npm run dev
```

5. Acesse a aplicação no navegador:  
👉 [http://localhost:5173](http://localhost:5173)


## 📁 Estrutura básica do projeto

```
src/
├── pages/               # Páginas da aplicação
├── services/            # Lógicas de acesso a API
├── assets/              # Arquivos estáticos
├── main.tsx             # Entry point do app
└── App.tsx              # Arquivo de rotas principais

```

---

## 🧠 Autor

Feito com ☕ por **Marx**  

Entre em contato no [LinkedIn](https://www.linkedin.com/in/marx-roberto/)

---
