import livro from "../models/Livros.js";

class LivroController {
    static async listarLivros (req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (erro) {
            res.status(500).json({message: `${erro.message}} - falha ao listar livros`});
        }
    }

    static async listarLivroPorId (req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            res.status(200).json(livroEncontrado);
        } catch (erro) {
            res.status(500).json({message: `${erro.message}} - falha ao listar livros por Id`});
        }
    }

    static async cadastrarLivro (req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({message: "criado com sucesso", livro: novoLivro})
        } catch (erro){
            res.status(500).json({message: `${erro.message}} - falha ao cadastrar livro`});
        }
    }

    static async atualizarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndUpdate(id, req.body);
            res.status(200).json({message: "Livro atualizado"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message}} - falha ao atulizar livros`});
        }
    }

    static async deletarLivro (req, res) {
        try {
            const id = req.params.id;
            await livro.findByIdAndDelete(id);
            res.status(200).json({message: "Livro excluido"});
        } catch (erro) {
            res.status(500).json({message: `${erro.message}} - falha ao deletar livros`});
        }
    }

}

export default LivroController;