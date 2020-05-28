const router = require('express').Router();

router.get('/', (req,res, next) => {
    res.sendStatus(200);
});

router.get('/secret', (req,res, next) => {
    res.status(200).json({
        message: "Bienvenue dans le menu secret"
    });
});

module.exports = router;
