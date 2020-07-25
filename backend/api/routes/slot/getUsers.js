const {getSlot} = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, AuthError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {slotId, userId} = req.body;
        const slot = await getSlot(slotId, userId);
        if (slot == null) return res.json({...AuthError, message: "You are not authorized to view the slot"});
        return res.json({...Success, users: slot.students});
    } catch (error) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);   
    }
}