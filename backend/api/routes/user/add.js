const {addUser} = require('../../dbFunctions/user');
const logger = require('../../../config/winston');
const { ServerError, Success } = require('../../responses');
const { hash } = require('../../utils/password');

module.exports = async (req, res) => {
    try {
        const { name, email, mobile, password, dateOfBirth, access } = req.body;
        let passwordHash = await hash(password);
        const confirmation = await addUser(name, email, mobile, passwordhash, dateOfBirth, access);
        if (confirmation == null) return res.json({...ServerError, message: "Error registering user"});
        return res.json({ ...Success, id: confirmation._id, token:""});
    } catch {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}