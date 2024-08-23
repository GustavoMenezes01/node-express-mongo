import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.status(200).send("curos de node,js utilizando o express")
})

export default app;