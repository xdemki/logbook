const router = require('express').Router();

router.use('/', require('./post/create-qr-code'));

module.exports = router;