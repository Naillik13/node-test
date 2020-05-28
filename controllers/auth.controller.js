const User = require('../models/user.model');

exports.postSignup = async(req, res, next) => {
    if (!req.body || !req.body.username || !req.body.email || !req.body.password) return res.sendStatus(400);

    const user = new User({... req.body});

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
