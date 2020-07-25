const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const mongoose = require('mongoose');
const User = require('../models/user');
const jwtKey  = require("../../config/loadConfig").JWT;

const  opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = jwtKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        // console.log(jwt_payload);
        User.findOne({ _id : jwt_payload.id , access : "admin"})
            .then(user => {
                if(user) {
                    return done(null, user);
                }

                return done(null, false);
            })
            .catch(err => console.log(err));
    }));
};