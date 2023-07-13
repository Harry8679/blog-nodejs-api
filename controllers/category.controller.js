const create = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Catégorie créée !'
        });
    } catch (error) {
        res.json(error.message);
    }
}

const single = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Voir la catégorie'
        });
    } catch (error) {
        res.json(error.message);
    }
}

const all = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Liste de toutes les catégories'
        });
    } catch (error) {
        res.json(error.message);
    }
}

const deleted = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Catégorie supprimée'
        });
    } catch (error) {
        res.json(error.message);
    }
}

const update = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Catégorie mise à jour'
        });
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = { create, single, all, deleted, update };