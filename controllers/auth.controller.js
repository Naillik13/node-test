const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.postSignup = async(req, res, next) => {
    if (!req.body || !req.body.username || !req.body.email || !req.body.password) return res.sendStatus(400);

    let salt = bcrypt.genSaltSync(12);
    let hash = bcrypt.hashSync(req.body.password, salt);

    const user = new User({... req.body});
    user.password = hash;

    user.save().then(data => {
        res.status(201).json({
            message: "User successfully created",
            result: data
        })
    }) .catch(err => {
        console.log(err);
        res.status(201).json(user)
    });
};
