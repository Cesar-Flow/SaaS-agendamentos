const { Role } = require('../../database/index');

module.exports = {
    // Busca uma sessão ativa pelo id
    getRoleById: async (roleId, transaction = null) => {
        return await Role.findOne({
            attributes: ['id', 'name', 'description'],
            where: {
                id: roleId,
            },
            raw: true,
            transaction
        });
    },
};
