const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
require('./config/dbConnect');
const app = express();

// middlewares
// routes
//--------
// User Routes
//--------

// POST/api/users/register
app.post('/api/v1/users/register', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Inscription réussie !'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// POST/api/v1/users/login
app.post('/api/v1/users/login', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Connexion réussie !'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// GET/api/v1/users/:id
app.get('/api/v1/users/profile/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Voir votre profil'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// GET/api/v1/users
app.get('/api/v1/users', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Liste de tous les utilisateurs'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// DELETE/api/v1/users/:id
app.delete('/api/v1/users/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Votre compte a bien été fermé'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// PUT/api/v1/users/:id
app.put('/api/v1/users/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Votre profil a bien été mis à jour'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// ----------------------------------------------------------------

//--------
// Post Routes
//--------

// POST/api/posts
app.post('/api/v1/posts', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Publication créée !'
        });
    } catch (error) {
        res.json(error.message);
    }
});


// GET/api/v1/posts/:id
app.get('/api/v1/posts/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Voir la publication'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// GET/api/v1/posts
app.get('/api/v1/posts', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Liste de toutes les publications'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// DELETE/api/v1/posts/:id
app.delete('/api/v1/posts/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Publication supprimée'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// PUT/api/v1/posts/:id
app.put('/api/v1/posts/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Publication mise à jour'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// ----------------------------------------------------------------

//--------
// Comment Routes
//--------

// POST/api/comments
app.post('/api/v1/comments', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Commentaire créé !'
        });
    } catch (error) {
        res.json(error.message);
    }
});


// GET/api/v1/comments/:id
app.get('/api/v1/comments/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Voir le commentaire'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// GET/api/v1/comments
app.get('/api/v1/comments', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Liste de tous les commentaires'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// DELETE/api/v1/comments/:id
app.delete('/api/v1/comments/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Commentaire supprimé'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// PUT/api/v1/comments/:id
app.put('/api/v1/comments/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Commentaire mise à jour'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// ----------------------------------------------------------------
//--------
// Category Routes
//--------

// POST/api/categories
app.post('/api/v1/categories', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Catégorie créée !'
        });
    } catch (error) {
        res.json(error.message);
    }
});


// GET/api/v1/categories/:id
app.get('/api/v1/categories/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Voir la catégorie'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// GET/api/v1/categories
app.get('/api/v1/categories', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Liste de toutes les catégories'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// DELETE/api/v1/categories/:id
app.delete('/api/v1/categories/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Catégorie supprimée'
        });
    } catch (error) {
        res.json(error.message);
    }
});

// PUT/api/v1/categories/:id
app.put('/api/v1/categories/:id', async (req, res) => {
    try {
        res.json({
            status: 'success',
            data: 'Catégorie mise à jour'
        });
    } catch (error) {
        res.json(error.message);
    }
});
// Error handlers middlewares
// Listen to server
const PORT = process.env.PORT || 9000;

app.listen(PORT, console.log(`Server is running on the port ${PORT}`));