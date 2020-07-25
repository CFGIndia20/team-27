const {applyJob} = require('../../dbFunctions/job');
const logger = require('../../../config/winston');

const {ServerError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId, jobId} = req.body;
        /** Check completion status */

        const user = await getAccessType(userId);

        /** Course completed */
        const completed = await getUserForJob(user.student);
        if(completed.slot == null || completed.slot.active == false) {
            return res.json(AuthError);
        }

        const added = await applyJob(jobId, userId)
        if (added == null) return res.json({...ServerError, message: 'Error applying to the job'});
        return res.json(Success);
    } catch {
        logger.error({err:error, message: 'An error occured'});
        return res.json(ServerError);
    }
}