const {verifyUser} = require('../../dbFunctions/user');
const logger = require('../../../config/winston');
const { ServerError, Success } = require('../../responses');

module.exports = async (req, res) => {
    try {
        const { userId } = req.body;
        const confirmation = await verifyUser(userId);
        if (confirmation == null) return res.json({...ServerError, message: "Error verifying user"});
        return res.json({...Success});
    } catch(error) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}