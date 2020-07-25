const {getAllSlots} = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, AuthError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId} = req.body;
        const slots = await getAllSlots();
        return res.json({...Success, slots: slots});
    } catch (err) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);   
    }
}