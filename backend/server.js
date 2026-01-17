require('module-alias/register');
require('dotenv').config();

// Config
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./src/docs/swagger');

const { SequelizeProvider } = require('@providers');
const { errorHandler } = require('@middlewares');

// Importando os modelos do banco
const { Appointment, Comp_design_settings, Company, RefreshToken, Service, User, Role } = require('./src/database/index');

app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const authRoutes = require('./src/routes/auth.routes');

// Rodando servidor
async function runServer() {
    try {
        // Sincronizando banco de dados
        //await SequelizeProvider.sync({ alter: true }); 

        await Company.sync({ alter: true });
        await Role.sync({ alter: true });
        await User.sync({ alter: true });
        await RefreshToken.sync({ alter: true });

        console.log("Banco sincronizado");

        // Rotas
        app.use('/auth', authRoutes);

        app.use(errorHandler);

        // Expondo porta padrão
        app.listen(process.env.PORT || 3000, () => {
            console.log("Servidor rodando");
        });
    } catch (err) {
        console.error('Erro ao iniciar servidor: ', err);
    }
}

runServer();