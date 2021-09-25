const path = require('path');
const express = require('express');
const app = express();
const morgan = require('morgan');
require('dotenv').config();
const cors = require('cors');
const passport = require('passport');
require('./passport-setup');
const cookieSession = require('cookie-session');





// 







//importing routes
const indexRoutes = require('./routes/index');



//settings
app.set('port', process.env.PORT || 3001);
app.set('views' , path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method, aplication/json');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}
app.use(cors(corsOptions));




app.use(express.json());
app.use(cookieSession({

    name: 'tuto-session',
    keys: ['key1','key2']
}
));


const isLoggedIn = (req, res, next) => {
    if (req.user) {
        exports.user = user;
            next();
    } else {
        res.sendStatus(401);
    }

};

app.use(passport.initialize());
app.use(passport.session());


////////////////////////


//routes
app.use('/', indexRoutes);


app.use(cors(corsOptions));


//starting the server
app.listen(app.get('port'), () => {

    console.log(`Server on port ${app.get('port')}`);
    
    });