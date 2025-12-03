require('dotenv').config();

const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send("Olá, mundo!");
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Servidor rodando");
});