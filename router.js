const {Router} = require('express');

const router = Router();

router.get('/', (req,res,next) => {
    res.status(200).send('oyk');
})

router.get('/api', (req,res,next) => {
    res.status(200).send('text');
})
module.exports = router;