require('dotenv').config();

// Config
const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const authRoutes = require('./src/modules/auth/auth.routes');
const userRoutes = require('./src/modules/users/user.routes');

// Routes
app.get('/', (req, res) => {
    res.send("Olá, mundo!");
});

app.use('/auth', authRoutes);
app.use('/users', userRoutes);

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor rodando");
});