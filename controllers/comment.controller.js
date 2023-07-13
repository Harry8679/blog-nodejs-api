const create = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Commentaire créé !'
        });
    } catch (error) {
        res.json(error.message);
    }
}

const single = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Voir le commentaire'
        });
    } catch (error) {
        res.json(error.message);
    }
}

const all = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Liste de tous les commentaires'
        });
    } catch (error) {
        res.json(error.message);
    }
}

const deleted = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Commentaire supprimé'
        });
    } catch (error) {
        res.json(error.message);
    }
}

const update = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Commentaire mise à jour'
        });
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = { create, single, all, deleted, update };