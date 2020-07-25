const {applyJob} = require('../../dbFunctions/job');
const logger = require('../../../config/winston');
const {getAccessType, getStudentDetailsForJob} = require('../../dbFunctions/user');
const {getPresent, getTotalClasses} = require('../../dbFunctions/attendance');

const {ServerError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId, jobId} = req.body;
        /** Check completion status */

        const user = await getAccessType(userId);

        /** Course completed */
        const completed = await getStudentDetailsForJob(user.student);
        if(completed.slot == null || completed.slot.active == true) {
            return res.json(AuthError);
        }
        const allClasses = await getTotalClasses(completed.slot._id);
        const presentClasses = await getPresent(completed.slot._id);
        if (presentClasses.dailyStatus.length/allClasses.dailyStatus.length < 0.8) {
            return res.json({...AuthError, message: 'You have not completed the attendance criteria'});
        }

        const added = await applyJob(jobId, userId)
        if (added == null) return res.json({...ServerError, message: 'Error applying to the job'});
        return res.json(Success);
    } catch {
        logger.error({err:error, message: 'An error occured'});
        return res.json(ServerError);
    }
}