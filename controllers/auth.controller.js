const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

const userExists = async(email) =>
    await User.findOne({ email })
        .then(user => user || false);

exports.signup = async(req, res, next) => {
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

exports.login = async(req, res, next) => {
    if (!req.body || !req.body.email || !req.body.password) return res.sendStatus(400);

    const { email, password } = req.body;

    try {
        const user = await userExists(email)
        if (!user ) {
            return res.status(401).json({
                message: "Authentication failed"
            })
        }
        const isPasswordValid = await bcrypt.compare(password, user.password)
        if (!isPasswordValid ) {
            return res.status(401).json({
                message: "Authentication failed"
            })
        }

        return res.status(200).json({
            message: "Authentication succeed",
            result: user
        })
    } catch (err) {
        console.log(err);
        return res.status(401).json({
            message: "Authentication failed"
        })
    }


};
