// Register
const register = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Inscription réussie !'
        });
    } catch (error) {
        res.json(error.message);
    }
}

// Login
const login = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Connexion réussie !'
        });
    } catch (error) {
        res.json(error.message);
    }
}

// Single
const single = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Voir votre profil'
        });
    } catch (error) {
        res.json(error.message);
    }
}

// All users
const all = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Liste de tous les utilisateurs'
        });
    } catch (error) {
        res.json(error.message);
    }
}

// Update
const update = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Votre profil a bien été mis à jour'
        });
    } catch (error) {
        res.json(error.message);
    }
}

// Delete
const deleted = async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Votre compte a bien été fermé'
        });
    } catch (error) {
        res.json(error.message);
    }
}

module.exports = { register, login, single, all, update, deleted };