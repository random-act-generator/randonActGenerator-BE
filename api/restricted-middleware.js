const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secrets = require('../config/secrets.js');

const Users = require('./user-model');

module.exports = (req, res, next) => {
    const token = req.headers.Authorization;

    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
        if (err) {
            res.status(401).json({ message: "You shall not pass son!" })
            //console.log(token);
        } else {
            req.decodedToken = decodedToken;

            next();
        }
    });
};
