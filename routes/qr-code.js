const router = require('express').Router();

router.get('/:date/:Class/:teacher/:student', async(req, res) => {
    const data = { date, Class, teacher, student } = req.params;

    res.send(data)
})

module.exports = router;