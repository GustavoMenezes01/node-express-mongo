import express from "express";

const app = express();

const livros = [
    {
        id: 1,
        titulo: "Casais inteligentes enriquecem juntos"
    },
    {
        id:2,
        titulo: "A cabana"
    }
]

app.get("/", (req, res) => {
    res.status(200).send("curos de node,js utilizando o express")
})

app.get("/livros", (req, res) => {
    res.status(200).json(livros);
})

export default app;