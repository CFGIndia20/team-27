const {removeUserFromSlot, hasUserAccess } = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, AuthError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId, slotId} = req.body;
        const hasAccess = await hasUserAccess(slotId, userId);
        if (hasAccess == null) return res.json({...AuthError, message: "You are not authorized to view the slot"});

        const slot = await removeUserFromSlot(slotId, userId);

        if (slot == null) return res.json(ServerError);
        return res.json({...Success});
    } catch (err) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);   
    }
}