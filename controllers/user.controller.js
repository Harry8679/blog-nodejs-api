const User = require('../models/user.model');
const bcrypt = require('bcryptjs');
const generateToken = require('../utils/generateToken.util');
const generateTokenFromHeader = require('../utils/generateTokenFromHeader.util');

// Register
const register = async (req, res) => {
    // console.log(req.body);
    const { firstname, lastname, profilePhoto, email, password } = req.body;
    try {
        // Check if user exists
        const userFound = await User.findOne({ email });
        if (userFound) {
            return res.json({
                message : 'Cet email existe déjà !'
            });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        // console.log(hashPassword);

        // Create the user
        const user = await User.create({ firstname, lastname, email, password: hashedPassword });
        res.json({
            status: 'success',
            data: user
        });
    } catch (error) {
        res.json(error.message);
    }
}

// Login
const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const userFound = await User.findOne({ email });

        // Verify password
        const isPasswordMatched = await bcrypt.compare(password, userFound.password);

        if (!userFound || !isPasswordMatched) {
            return res.json({
                msg: 'Identifiants corrects'
            });
        }

        /* if (!userFound) {
            return res.json({
                message: 'Identifiants incorrects'
            });
        }

        const isPasswordMatched = await User.findOne({ password });
        if (!isPasswordMatched) {
            return res.json({
                message: 'Identifiants incorrects'
            });
        }*/
        /* 
        const userFound = await User.findById(id);
        const { firstname, lastname, email, isAdmin, _id } = userFound;
        res.json({
            status: 'success',
            data: { firstname, lastname, email, isAdmin, token: _id }
        });
        */
        const token = generateTokenFromHeader(req);
    
        console.log(token);

        res.json({
            status: 'success',
            data: {
                firstname: userFound.firstname,
                lastname: userFound.lastname,
                email: userFound.email,
                isAdmin: userFound.isAdmin,
                token: generateToken(userFound._id)
            }
        });
    } catch (error) {
        res.json(error.message);
    }
}

// Single
const single = async (req, res) => {
    // console.log(req.userAuth);
    // console.log(req.params);
    // console.log(req.headers);
    try {
        const userFound = await User.findById(req.userAuth);
        res.json({
            status: 'success',
            data: userFound
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