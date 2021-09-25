const { Router, application } = require('express');
const router = Router();


//baase de dato

//const bicicletas = require('../sample.json');

const bicicleta = require('../models/bicicletas');


//controllers

const {index,newBici,getBici, updateBici, deleteBici} = require('../controllers/bicicletas');


router.get('/',index);
router.post('/', newBici);
router.get('/:biciId',getBici);
router.put('/:biciId',updateBici);
router.delete('/:biciId', deleteBici);



module.exports = router;
