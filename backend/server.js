require('module-alias/register');
require('dotenv').config();

// Config
const express = require('express');
const app = express();

const { SequelizeProvider } = require('@providers');
const { errorHandler } = require('@middlewares');

// Importando os modelos do banco
const { Appointment, Comp_design_settings, Company, Customer, Platform_admin, Refresh_token, Service, Staff, User } = require('./src/database/index');

app.use(express.json());
app.use(express.urlencoded());

const authRoutes = require('./src/modules/auth/auth.routes');
const customerRoutes = require('./src/modules/customer/customer.routes'); 
// const errorMiddleware = require('./src/core/errors/errorMiddleware');

// Rodando servidor
async function runServer() {
    try {
        // Sincronizando banco de dados
        //await sequelizeProvider.sync({ alter: true }); 

        await Company.sync({ alter: true });
        await Customer.sync({ alter: true });
        //await Service.sync({ alter: true });
        //await Appointment.sync({ alter: true });

        console.log("Banco sincronizado");

        // Rotas
        //app.use(express.static(path.join(__dirname, 'html')));
        app.use('/auth', authRoutes);
        app.use('/customers', customerRoutes);

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