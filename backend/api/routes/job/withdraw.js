const {withdrawJob} = require('../../dbFunctions/job');
const {getAccessType} = require('../../dbFunctions/user');
const logger = require('../../../config/winston');

const {ServerError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId, jobId} = req.body;            
        const user = await getAccessType(userId);
        /** Course completed */
        const completed = await getUserForJob(user.student);
        if(completed.slot == null || completed.slot.active == false) {
            return res.json(AuthError);
        }
        
        const withdrawed = await withdrawJob(jobId, userId)
        if (withdrawed == null) return res.json({...ServerError, message: 'Error withdrawing from the job'});
        return res.json(Success);
    } catch {
        logger.error({err:error, message: 'An error occured'});
        return res.json(ServerError);
    }
}