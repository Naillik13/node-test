const router = require('express').Router();
const authRoutes = require('../controllers/auth.controller');

router.post('/signin', authRoutes.postSignin);

module.exports = router;
