const passport = require('passport');

const GoogleStrategy = require('passport-google-oauth20').Strategy;


passport.serializeUser(function(user, done) {
    done(null, user);
  });
  
passport.deserializeUser(function(user, done) {
   //user.findById(id, function(err, user) {
      done(null, user);
  //  });
});


passport.use(new GoogleStrategy({
    clientID: `${process.env.GOOGLE_CLIENT_ID}`,
    clientSecret: `${process.env.GOOGLE_CLIENT_SECRET}`,
    callbackURL: `${process.env.SERVER_ROOT_URI}/auth/google/callback`
  },
  function(accessToken, refreshToken, profile, done) {
      // use the profile info to check if the user is registered in ur db
   //user.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(null, profile);
   // });
  }
));

