const bcrypt = require('bcrypt');

module.exports = {
    /**
     * @desc Hash password
     * @param {string} password Password entered
     **/
     hash: (password) => {
        return new Promise((resolve, reject) => {
            bcrypt.genSalt(10,(err,salt) => {
                if (err) return reject(err);
                bcrypt.hash(password, salt , (err, hash) =>{
                    if (err) return reject(err);
                    return resolve(hash);
                });
            });
        })
    },

    /**
     * @desc Verify password
     * @param {string} password Password entered
     * @param {string} hash Hash of password stored
     **/
    verify: (password, hash) => {
        return new Promise((resolve, reject) => {
            bcrypt.compare(password, hash, function(err, res) {
                if (err) return reject(err);
                if (res) return resolve(true);
                return resolve(false);
            });
        })
    }
}