const {addUserToSlot} = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, AuthError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId, slotId} = req.body;
        const slot = await addUserToSlot(slotId, userId);
        if (slot == null) return res.json(ServerError);
        return res.json({...Success, slots: slots});
    } catch (err) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);   
    }
}