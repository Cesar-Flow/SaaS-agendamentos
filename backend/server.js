require('dotenv').config();

// Config
const path = require('path');
const express = require('express');
const sequelizeProvider = require('./src/core/providers/sequelizeProvider'); 
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const authRoutes = require('./src/modules/auth/auth.routes');
const clientsRoutes = require('./src/modules/clients/clients.routes');
// const errorMiddleware = require('./src/core/errors/errorMiddleware');

// Rodando servidor
async function runServer() {
    try {
        // Sincronizando banco de dados
        await sequelizeProvider.sync({ alter: true });
        console.log("Banco sincronizado");

        // Rotas
        //app.use(express.static(path.join(__dirname, 'html')));
        app.use('/auth', authRoutes);
        app.use('/clients', clientsRoutes);

        // Expondo porta padrão
        app.listen(process.env.PORT || 3000, () => {
            console.log("Servidor rodando");
        });
    } catch (err) {
        console.error('Erro ao iniciar servidor: ', err);
    }
}

runServer();