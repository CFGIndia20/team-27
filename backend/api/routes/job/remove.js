const {deleteJob} = require('../../dbFunctions/job');
const logger = require('../../../config/winston');

const {ServerError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId, jobId} = req.body;
        const deleted = await deleteJob(jobId, userId)
        if (deleted == null) return res.json({...ServerError, message: 'Error deleting the job'});
        return res.json({...Success});
    } catch (error){
        logger.error({err:error, message: 'An error occured'});
        return res.json(ServerError);
    }
}