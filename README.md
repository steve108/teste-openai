# teste-openai
Desafio

👉 API1 - Realiza um cadastro inicial de um possível cliente e armazena em um banco de dados noSQL

👉 API2 - Interage com uma única pergunta do usuário em uma integração com ChatGPT e armazena na mesma collection onde se encontra os dados do cliente

1 - Clone o repositório: git clone git@github.com:steve108/teste-openai.git

2 - Crie um arquivo .env na raiz do projeto, com base no arquivo env-example

  - DATABASE_URL: é necessária uma conexão com um banco MongoDB, mais detalhes em https://account.mongodb.com/
    - Para gerar a tabela rode o comando: npx prisma generate 
  - OPENAI_API_KEY: é necessária a criação de uma conta na OpenAI, mais detalhes em https://platform.openai.com/docs/overview

3 - npm init -y

4 - npm install --save-dev tsx

5 - npm run dev

