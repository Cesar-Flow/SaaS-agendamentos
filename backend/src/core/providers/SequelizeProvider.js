const { Sequelize } = require('sequelize');

class SequelizeProvider {
    constructor(databaseUrl = process.env.DATABASE_URL) {
        if (SequelizeProvider.instance) {
            return SequelizeProvider.instance;
        }

        this.sequelize = new Sequelize(databaseUrl, {
            dialect: 'postgres',
            protocol: 'postgres',
            logging: false,
        });

        SequelizeProvider.instance = this;
    }

    async connect() {
        try {
            await this.sequelize.authenticate();
            console.log('Banco pronto para receber novas conexões');
        } catch (err) {
            console.error('[ERRO] Problemas ao conectar ao banco: ', err);
            throw err;
        }
    }

    get db() {
        return this.sequelize;
    }
}

module.exports = new SequelizeProvider();
