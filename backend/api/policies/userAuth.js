const {verify} = require('../utils/jwt');
const logger = require('../../config/winston');
const {AuthError} = require('../responses');
const User = require('../models/user');


<<<<<<< HEAD
module.exports = passport => {
    passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
        // console.log(jwt_payload);
        User.findOneById(jwt_payload.id)
            .then(user => {
                if(user && user.access == 'student') {
                    return done(null, user);
                }
=======
/**
 * @desc Standard Express middleware for checking JSON token, and sending refresh token if expired
 * */
module.exports = async (req, res, next) => {
  const accessToken = req.headers['authorization'];
  if (accessToken == null) return res.status(401).json(AuthError);
  try {
    const token = await verify(accessToken);
    if (token.success != true || token.type != 'access_token') return res.status(401).json(AuthError);
    const user = await User.findOne({_id: token.id, access: 'user'});
    if (user == null) return res.status(401).json(AuthError);
>>>>>>> master

    req.body.userId = token.id;
    req.body.access = user.access;

    next();
  } catch (err) {
    logger.info({message: `Invalid access attempt`});
    return res.status(401).json(AuthError);
  }
};
