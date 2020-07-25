const JwtStrategy = require('passport-jwt').Strategy,
ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const jwtKey  = require("../../config/loadConfig").JWT;

const  opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = jwtKey;

module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        // console.log(jwt_payload);
        User.findOne({ _id : jwt_payload.id , access : "teacher"})
            .then(user => {
                if(user && user.access == 'teacher') {
                    return done(null, user);
                }

                return done(null, false);
            })
            .catch(err => {
                logger.error({error:err, message: 'An error occured'})
                return done(null, false);
            });
    }));
};