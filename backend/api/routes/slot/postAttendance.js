const {createAttendance, addAttendance, getSlot} = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, AuthError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {slotId, userId, date, attendance} = req.body;
        const hasAccess = await getSlot(slotId, userId);
        if (hasAccess == null) return res.json({...AuthError, message: "You are not authorized to view the slot"});

        const created = await createAttendance(attendance);
        if (created == null) return res.json({...ServerError, message: "An error occured while trying to add the attendance"});

        const updated = await addAttendance(slotId, date, userId, created._id);
        if (updated == null) return res.json({...ServerError, message: "An error occured while trying to add the attendance"});

        return res.json(Success);
    } catch (error) {
        console.log(error);
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);   
    }
}