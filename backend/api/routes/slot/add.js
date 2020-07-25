const {addSlot} = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId, startDate, endTime, startTime} = req.body;
        const added = await addSlot(userId, startDate, startTime, endTime);
        if (added == null) return res.json({...ServerError, message: "Error creating the slot"});
        return res.json({...Success, id: added._id});
    } catch {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}