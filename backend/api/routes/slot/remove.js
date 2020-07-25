const {removeSlot} = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId, slotId} = req.body;
        const removed = await removeSlot(slotId, userId);
        if (removed == null) return res.json({...ServerError, message: "Error creating the slot"});
        return res.json({...Success});
    } catch(error) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}