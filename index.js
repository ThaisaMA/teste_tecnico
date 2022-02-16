const express = require('express');
const router = require('./routes');

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.listen( PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
})

app.use(router);