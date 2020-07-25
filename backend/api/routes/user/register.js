const {addUser} = require('../../dbFunctions/user');
const logger = require('../../../config/winston');
const { ServerError, Success } = require('../../responses');
const { hash } = require('../../utils/password');
const { generate } = require('../../utils/jwt');

module.exports = async (req, res) => {
    try {
        const { name, email, mobile, password, dateOfBirth, access } = req.body;
        let passwordHash = await hash(password);
        const user = await addUser(name, email, mobile, passwordhash, dateOfBirth, access);
        if (user == null) return res.json({...ServerError, message: "Error registering user"});
        let token = await generate({ id: user.id });
        return res.json({ ...Success, user, token });
    } catch {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}