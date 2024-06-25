const codes = require('../../database/models/codes');

const router = require('express').Router();

router.get('/:identifier', async (req, res) => {
    try {
        const code = await codes.findOne({ identifier: req.params.identifier });

        if(code) {
            res.send(code);
            return code;
        } else {
            return 'not found';
        }
    } catch(err) {
        if(err) {
            return err;
        }
    }
});

module.exports = router;