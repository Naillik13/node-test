const User = require('../models/user.model');

exports.postSignin = async(req, res,next) => {
    res.status(200).json({
        message: "Post signin"
    })
};
