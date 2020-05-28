const router = require('express').Router();
const user = require('../controllers/user.controller');

router.put('/:id', user.setUser);

module.exports = router;
