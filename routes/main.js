const router = require('express').Router();

router.use('/', require('./qr-code'))

module.exports = router;