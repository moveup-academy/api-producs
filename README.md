## Api Produtos

### Exemplo de api em javascript

Para baixar o repositorio copie o comando abaixo:

```script
git@github.com:moveup-academy/api-producs.git
```

Para configurar as conexões do banco de dados

- Substitua o nome .env.example para .env
- Substitua as configurações da variável DATABASE_URL para as configurações do seu banco.

Para instalar as dependências execute o comando abaixo

```script
  npm install
```

Para criar a tabela de produtos execute o comando abaixo

```script
  npx prisma migrate dev
```

Para abrir o banco de dados execute o comando abaixo:

```script
  npm prisma studio
```

Para subir o servidor execute o comando abaixo

```script
  npm run dev
```
