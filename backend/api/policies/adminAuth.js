const {verify} = require('../utils/jwt');
const logger = require('../../config/winston');
const {AuthError, Forbidden} = require('../responses');
const User = require('../models/user');


/**
 * @desc Standard Express middleware for checking JSON token, and sending refresh token if expired
 * */
module.exports = async (req, res, next) => {
  const accessToken = req.headers['authorization'];
  if (accessToken == null) return res.status(401).json(AuthError);
  try {
    const token = await verify(accessToken);
    if (token.success != true) return res.status(401).json(AuthError);
    const user = await User.findOne({ _id: token.id, access: 'admin' });
    if (user == null) return res.status(401).json(AuthError);

    req.body.userId = token.id;
    req.body.access = user.access;

    next();
  } catch (err) {
    logger.info({message: `Invalid access attempt`});
    return res.status(401).json(AuthError);
  }
};
