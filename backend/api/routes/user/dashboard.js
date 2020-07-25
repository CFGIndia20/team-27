const logger = require('../../../config/winston');
const {getAccessType, getStudentDetailsForJob} = require('../../dbFunctions/user');
const {getPresent, getTotalClasses} = require('../../dbFunctions/attendance');
const {getTeacherOriginalSlots, getAddedSlots} = require('../../dbFunctions/teacher');
const {getCreatedByUser} = require('../../dbFunctions/slot');

const {ServerError, Success, AuthError} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId} = req.body;

        const user = await getAccessType(userId);
        if (user.verified == false) {
            return res.json({...AuthError, message: 'Please get verified'})
        }
        if (user.access == 'student' && user.student == null) {
            return res.json({...AuthError, message: 'Please enter your details'})
        }
        if (user.access == 'teacher') {
            const original = await getTeacherOriginalSlots(userId);
            const added = await getAddedSlots(userId);
            return res.json({...Success, original, added});
        }
        if (user.access == 'admin') {
            const slotsCreated = await getCreatedByUser(userId);
            return res.json({...Success, slotsCreated});
        }
        const slotDetails = await getStudentDetailsForJob(user.student);
        if (slotDetails.slot == null) {
            return res.json({...Success, active: null, message: 'Add a new slot'})
        }

        const presentClasses = await getPresent(slotDetails.slot._id);
        const allClasses = await getTotalClasses(slotDetails.slot._id);
        return res.json({...Success, isActive: slotDetails.slot.active, presentClasses, allClasses});
    } catch (err) {
        logger.error({err:error, message: 'An error occured'});
        return res.json(ServerError);
    }
};