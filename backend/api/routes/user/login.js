const {addUser,findUserByEmail} = require('../../dbFunctions/user');
const logger = require('../../../config/winston');
const { Success,AuthError } = require('../../responses');
const { hash,verify } = require('../../utils/password');

module.exports = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);
        const confirmation = await verify(password, user.password);
        if (!confirmation) return res.json({ ...AuthError, message: "Incorrect credentials" });
        let token = await generate({ id: user.id });
        return res.json({ ...Success, id: confirmation._id, token});
    } catch {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}