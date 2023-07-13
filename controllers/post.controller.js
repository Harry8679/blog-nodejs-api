const create = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Publication créée !'
        });
    } catch (error) {
        res.json(error.message);
    }
}

const single = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Voir la publication'
        });
    } catch (error) {
        res.json(error.message);
    }
}

const all = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Liste de toutes les publications'
        });
    } catch (error) {
        res.json(error.message);
    }
}

const deleted = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Publication supprimée'
        });
    } catch (error) {
        res.json(error.message);
    }
}

const update = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Publication mise à jour'
        });
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = { create, single, all, deleted, update };