const {allocateSlotToTeacher ,changeSlotChangeStatus, hasAdminAccess} = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, AuthError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {requestId, userId, status, teacherId} = req.body;

        const switchRequest = await changeSlotChangeStatus(requestId);
        if (switchRequest == null) return res.json({...ServerError, message: "An error occured while handling the request"});

        const hasAccess = await hasAdminAccess(switchRequest.slot, userId);
        if (hasAccess == null) return res.json({...AuthError, message: "You are not authorized to view the slot"});

        if (status == "true") {
            const slot = await allocateSlotToTeacher(switchRequest.slot, switchRequest.date, userId, teacherId);
            if (slot == null) return res.json({...ServerError, message: "An error occured while handling the request"});
            return res.json({...Success});
        } 
        return res.json({...Success});
    } catch (error) {
        console.log(error);
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);   
    }
}