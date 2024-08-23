import express from "express";
import connectNaDatabase from "./config/dbConnect.js";
import routes from "./routes/index.js";
 
const conexao = await connectNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexao feita");
})

const app = express();
routes(app);

app.put("/livros/:id", (req, res) => {
    const index = findBook(req.params.id);
    books[index].titulo = req.body.titulo;
    res.status(200).json(books);
})

app.delete("/livros/:id", (req, res) => {
    const index = findBook(req.params.id);
    books.splice(index, 1);
    res.status(200).send("Livro removido com sucesso");
})

export default app;
