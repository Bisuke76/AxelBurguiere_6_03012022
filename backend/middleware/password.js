const schemaPassword = require('../models/Password');

const status = require('http-status');


module.exports = (req, res, next) => {

    if (!schemaPassword.validate(req.body.password)) {
        res.status(status.BAD_REQUEST).json({ message: "Le mot de passe n'est pas conforme. Réessayez avec au moins 6 caractères, 1 majuscule, 2 chiffres et 1 caractère spécial" })
    } else {
        next();
    }
}