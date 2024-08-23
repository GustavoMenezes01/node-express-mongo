import express from "express";
import connectNaDatabase from "./config/dbConnect.js";
import livro from "./models/Livros.js";
 
const conexao = await connectNaDatabase();

conexao.on("error", (erro) => {
    console.error("erro de conexão", erro);
})

conexao.once("open", () => {
    console.log("Conexao feita");
})

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("curos de node,js utilizando o express")
})

app.get("/livros", async (req, res) => {
    const listaLivros = await livro.find({});
    res.status(200).json(listaLivros);
})

app.get("/livros/:id", (req, res) => {
    const index = findBook(req.params.id);
    res.status(200).json(books[index]);
})

app.post("/livros", (req, res) => {
    books.push(req.body);
    res.status(201).send("livro cadastrado com sucesso")
})

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

// mongodb+srv://admin:admin123@cluster0.xtd5j.mongodb.net/?retryWrites=true&w=majority