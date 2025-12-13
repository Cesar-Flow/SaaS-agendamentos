const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres', 
  protocol: 'postgres', 
  logging: false,       
});

async function connect() {
    try {
        await sequelize.authenticate();
        console.log("Banco pronto para receber novas conexões");
    } catch (err) {
        console.log("[ERRO] ", err);
    }
}

connect();

module.exports = sequelize;