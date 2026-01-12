# Backend

O projeto utiliza **Node.js**, **Express**, **Sequelize** e **PostgreSQL**, com suporte completo a execução local e via **Docker**.

---

## Tecnologias utilizadas

- **Node.js 24**
- **Express 5.2.1**
- **Sequelize 6.37.7**
- **PostgreSQL 15**
- JWT (jsonwebtoken 9.0.2)
- Bcrypt 6.0.0
- Nodemon 3.1.11
- Docker & Docker Compose

---

## Estrutura do projeto
### Estrutura de pastas:
```
src/
├── config/
├── core/
│   ├── errors/
│   ├── middlewares/
│   ├── providers/
│   └── utils/
├── database/
│   ├── config/
│   ├── migrations/
│   ├── models/
│   └── seeders/
├── modules/
│
server.js
```

### Scritps disponiveis:
```
npm run dev         # Executa o servidor com Nodemon
npm start           # Executa o servidor em produção
npm run migrate     # Executa as migrations
npm run seed:all    # Executa todos os seeders
```

### Aliases configurados:
```
@errors
@providers
@middlewares
@utils
```

### API disponivel em:
```
http://localhost:3000
```

## Requisitos

### Execução local (sem Docker)
- Node.js **v24**
- NPM
- PostgreSQL **15**
- Git

### Execução com Docker
- Docker
- Docker Compose (v3.9 ou superior)

Subir a aplicação com Docker:
```
docker compose up --build
```
---

## Configuração do ambiente (sem Docker)

1. Clone o repositório:

```bash
git clone <url-do-repositorio>
cd backend 
```

2. Instale as dependências:
```
npm install
```
3. Crie um arquivo .env na raiz do projeto de acordo com o [.env.example](https://github.com/Cesar-Flow/SaaS-agendamentos/blob/main/backend/.env.example)

4. Execute as migrations:
```
npm run migrate
```

5. Execute os seeders:
```
npm run seed:all
```
6. Inicie o servidor: 
```
npm run dev
```