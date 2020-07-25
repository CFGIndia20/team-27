const jwt = require('jsonwebtoken');
const {JWT} = require('../../config/loadConfig');

module.exports = {
  /**
     * @desc Generate a jwt token
     * @param data JSON data of user
     */
  generate: (type, data) => {
    return new Promise((resolve, reject) => {
      jwt.sign({ ...data }, JWT, (err, result) => {
        if (err || result == null) {
          return reject({
            success: false
          });
        }
        return resolve({
          success: true,
          token: result,
        });
      });
    });
  },

  /**
     * @desc verify token
     * @param token JWT token
     */
  verify: (token) => {
    return new Promise((resolve, reject) => {
      return jwt.verify(token, JWT, (err, result) => {
        if (err || result == null) {
          return reject({
            success: false
          });
        }
        return resolve({
          success: true,
          ...result,
        });
      });
    });
  },
};
