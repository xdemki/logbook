const router = require('express').Router();

router.use('/', require('./post/create-qr-code'));
router.use('/code', require('./get/get-code'));

module.exports = router;