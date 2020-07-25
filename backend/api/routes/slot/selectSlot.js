const {addUserToSlot} = require('../../dbFunctions/slot');
const {addSlotToUser, getAccessType} = require('../../dbFunctions/user');
const logger = require('../../../config/winston');
const {ServerError, AuthError, Success} = require('../../responses');
const assignTeacher = require('../../utils/assignTeacher.js')
module.exports = async (req, res) => {
    try {
        const {userId, slotId} = req.body;
        const user = await getAccessType(userId);
        const slot = await addUserToSlot(slotId, userId);
        if (slot == null) return res.json(ServerError);

        const updated = await addSlotToUser(slotId, user.student);
        if (updated == null) return res.json(ServerError);

        res.json({...Success, slots: slots});
        if (slot.students >= 15) {
            await assignTeacher(slotId);
        }
    } catch (err) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);   
    }
}