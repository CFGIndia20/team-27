const {getSwitchRequests} = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId} = req.body;
        const requests = await getSwitchRequests(userId);
        return res.json({...Success, requests: requests});
    } catch (err) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);   
    }
}