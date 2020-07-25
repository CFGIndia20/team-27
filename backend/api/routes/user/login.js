const {addUser,findUserByEmail} = require('../../dbFunctions/user');
const logger = require('../../../config/winston');
const { Success,AuthError, Forbidden } = require('../../responses');
const { hash,verify } = require('../../utils/password');

module.exports = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);
        const confirmation = await verify(password, user.password);
        if (!confirmation) return res.json({ ...AuthError, message: "Incorrect credentials" });
        if (!user.verified) return res.json({ ...Forbidden, message: "Please wait to be verified by an admin" });
        let token = await generate({ id: user.id });
        return res.json({ ...Success, id: confirmation._id, token});
    } catch(error) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}