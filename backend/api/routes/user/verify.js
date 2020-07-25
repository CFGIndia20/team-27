const {addUser, verifyUser} = require('../../dbFunctions/user');
const logger = require('../../../config/winston');
const { ServerError, Success } = require('../../responses');

module.exports = async (req, res) => {
    try {
        const { _id, email } = req.body;
        const confirmation = await verifyUser(_id);
        if (confirmation == null) return res.json({...ServerError, message: "Error verifying user"});
        return res.json({...Success, id: confirmation._id});
    } catch {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}