import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth2";
import * as dotenv from "dotenv";
import express from "express";

dotenv.config();

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/oauth2/redirect/google',
    scope: [ 'profile' ]
  }, function verify(issuer, profile, cb) {
    console.log(issuer, profile);
    return cb(null)
}));
  
passport.serializeUser((user, done) => {
    done(null, user)
})
    
passport.deserializeUser(function (user, done) {
    done(null, user);
});