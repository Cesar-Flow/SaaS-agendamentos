// Simulação do banco
const users = [
    {
        id: 1,
        name: "Usuário Teste",
        email: "teste@gmail.com",
        password: "123456"
    }, 
    {
        id: 2,
        name: "ADM",
        email: "adm@gmail.com",
        password: "admin"
    }
];


module.exports = {
    async findById(id) { return users.find((u) => u.id === id) || null; },

    async findByEmail(email) { return users.find((u) => u.email === email) || null; }
}