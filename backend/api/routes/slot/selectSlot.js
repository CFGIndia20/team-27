const {addUserToSlot} = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, AuthError, Success} = require('../../responses');
const assignTeacher = require('../../utils/assignTeacher.js')
module.exports = async (req, res) => {
    try {
        const {userId, slotId} = req.body;
        const slot = await addUserToSlot(slotId, userId);
        if (slot == null) return res.json(ServerError);
        res.json({...Success, slots: slots});
        if (slot.students >= 15) {
            await assignTeacher(slotId);
        }
    } catch (error) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);   
    }
}