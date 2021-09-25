const { application } = require('express');
const express = require('express');
const router = express.Router();
const axios = require('axios');
const passport = require('passport');
//require('./passport-setup');
const cookieSession = require('cookie-session');



router.get('/', async (req, res) =>{

   
    res.render('home', {
       
        

    });
}
);




router.get('/crud', async (req, res) =>{

   
    res.render('crud', {
       
        

    });
}
);


router.get('/mostrar/:id', async (req, res) =>{

  
  const { id } = req.params;


  res.render('mostrar', {

    id

  });

 

}
);



router.get('/eliminar/:id', async (req, res) =>{

    const { id } = req.params;

   axios.delete(`${process.env.BICICLETAS_URL}/${id}`);

    res.redirect('/crud');
}
);



router.post('/add', async (req, res) =>{

  var data = req.body;

  console.log(data);

  axios.post(`${process.env.BICICLETAS_URL}`, data);
  
 

  res.redirect('/crud');

});



router.get('/editar/:id', async (req, res) =>{

  res.render('edit');

}
);



router.post('/editar/:id', async (req, res) =>{

    var data = req.body;

    const { id } = req.params;

  axios.put(`${process.env.BICICLETAS_URL}/${id}`, data);

  res.redirect('/crud');
  
}
);



router.get('/auth/google',
  passport.authenticate('google', { scope: ['profile' , 'email'] }));

router.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/failed' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
    console.log(req.user.emails[0].value);
    console.log(req.session);
});




module.exports = router;