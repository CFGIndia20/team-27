const {addSlotChangeRequest, hasTeacherAccess} = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, AuthError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {slotId, userId, date} = req.body;
        const hasAccess = await hasTeacherAccess(slotId, userId);
        if (hasAccess == null) return res.json({...AuthError, message: "You are not authorized to view the slot"});

        const slot = await addSlotChangeRequest(userId, slotId, date);
        if (slot == null) return res.json({...ServerError, message: "An error occured while adding the request"});
        return res.json({...Success, users: slot.students});
    } catch (err) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);   
    }
}