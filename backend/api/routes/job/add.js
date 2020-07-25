const {createJob} = require('../../dbFunctions/job');
const logger = require('../../../config/winston');

const {ServerError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {userId, skills, description, company, salary} = req.body;
        const created = await createJob(userId, skills, description, company, salary)
        if (created == null) return res.json({...ServerError, message: 'Error creating the job'});
        return res.json({...Success, id: created._id});
    } catch {
        logger.error({err:error, message: 'An error occured'});
        return res.json(ServerError);
    }
}