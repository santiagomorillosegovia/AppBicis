const Bicicletas = require('../models/bicicletas');

module.exports = {


       index: async (req, res, next) => {

                const bicicletas = await Bicicletas.find();
                res.status(200).json(bicicletas);

       },



       newBici: async (req, res, next) => {

                const newBici = new Bicicletas(req.body);
                const bici = await newBici.save();
                const bicicletas = await Bicicletas.find();
                res.status(200).json(bici);


        },  


        getBici: async (req, res, next) => {

            const {biciId} = req.params;
            const bici = await Bicicletas.findById(biciId);
            res.status(200).json(bici);


        }, 



        updateBici: async (req, res, next) => {

            const {biciId} = req.params;
            const bici = await Bicicletas.findByIdAndUpdate(biciId,req.body);
            res.status(200).json(req.body);


         }, 


         deleteBici: async (req, res, next) => {

            const {biciId} = req.params;
            const bici = await Bicicletas.findByIdAndDelete(biciId,req.body);
            res.status(200).json(bici);


         }



}