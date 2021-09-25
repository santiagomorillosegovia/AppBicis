const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const cors = require('cors');

const app = express();




mongoose.connect(`mongodb+srv://samose96:${process.env.DBPASS}@cluster0.qjhrn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)
.then(db => console.log(`DB CONNECTED`))
.catch(err => console.log(err));








//settings
app.set('port', process.env.PORT || 3002);
app.set('json spaces', 2);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(bodyParser.json());
/* app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
}); */

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));



//routes
app.use(require('./routes/index'));
app.use('/api/markers',require('./routes/bicicletas'));
//app.use(cors(corsOptions));



//starting server
app.listen(app.get('port'), () => {

console.log(`Server on port ${app.get('port')}`);

});