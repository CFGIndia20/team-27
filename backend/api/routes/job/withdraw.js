const {withdrawJob} = require('../../dbFunctions/job');
const logger = require('../../../config/winston');

const {ServerError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId, jobId} = req.body;            
        const withdrawed = await withdrawJob(jobId, userId)
        if (withdrawed == null) return res.json({...ServerError, message: 'Error withdrawing from the job'});
        return res.json(Success);
    } catch {
        logger.error({err:error, message: 'An error occured'});
        return res.json(ServerError);
    }
}