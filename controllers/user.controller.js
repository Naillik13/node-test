const User = require('../models/user.model');

exports.setUser = async(req, res, next) => {
    if (!req.body) return res.sendStatus(400);

    const { username } = req.body;

    try {
        User.findByIdAndUpdate(req.params.id, { username }, { new: true }).then(data => {
            res.status(200).json({
                message: "User successfully updated",
                result: data
            })
        })
    } catch (err) {
        res.status(400).json({
            message: "Error while updating user"
        })
    }

};
