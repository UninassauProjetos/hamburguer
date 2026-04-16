import Avaliacao from "../models/Avaliacao.js";

const AvaliacaoController = {
    create: async (req, res) => {
        try {
            const { nota } = req.body;

            if (nota < 1 || nota > 5) {
                throw new Error("A nota deve ser entre 1 e 5");
            }

            const avaliacao = await Avaliacao.create(req.body);
            res.status(201).json(avaliacao);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    findAll: async (req, res) => {
        try {
            const avaliacoes = await Avaliacao.findAll();

            if (avaliacoes.length === 0) {
                throw new Error("Não há avaliações");
            }

            res.status(200).json(avaliacoes);

        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
};

export default AvaliacaoController;