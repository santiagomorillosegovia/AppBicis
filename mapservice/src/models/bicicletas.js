const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bicicletaSchema = new Schema({
    id: String,
    color: String,
    modelo: String,
    latitud: String,
    longitud: String
})

module.exports = mongoose.model('Bicicleta',bicicletaSchema);