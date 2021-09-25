const { Router } = require('express');
const router = Router();
//const axios = require('axios');


router.get('/',(req,res) => {

    res.json({"Estado": "Online"});

});






module.exports = router;