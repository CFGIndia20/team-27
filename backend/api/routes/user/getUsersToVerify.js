const {getAllUnverified, getAccessType} = require('../../dbFunctions/user');
const logger = require('../../../config/winston');
const { ServerError, Success, AuthError } = require('../../responses');

module.exports = async (req, res) => {
    try {
        const users = await getAllUnverified();
        return res.json({...Success, users});
    } catch(error) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}