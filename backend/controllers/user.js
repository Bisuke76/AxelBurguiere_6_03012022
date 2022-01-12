/* 
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
*/

const { response } = require("../app")


exports.signup = (req, res, next) => {
    // Tu récupére le password : tu le crypt
    // .then ... hash 
    const user = new User({

    })

    .catch((error) => res.status(500).json({ error }));
}

exports.login..