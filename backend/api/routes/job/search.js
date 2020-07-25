const {findAllJobs, findBySkill} = require('../../dbFunctions/job');
const {getAccessType, getUserForJob} = require('../../dbFunctions/user');
const logger = require('../../../config/winston');

const {ServerError, Success, AuthError} = require('../../responses');

module.exports = {
    bySkill: async (req, res) => {
        try {
            const {userId, skills} = req.body;
            
            if (user.access == 'admin') {
                const jobs = findBySkill(skills);
                return res.json({...Success, jobs});
            }

            /** Course completed */
            const completed = await getUserForJob(userId);
            if(completed.slot == null || completed.slot.active == false) {
                return res.json(AuthError);
            }


            return res.json(AuthError);
        } catch {
            logger.error({err:error, message: 'An error occured'});
            return res.json(ServerError);
        }
    },
    all: async (req, res) => {
        try {
            const {userId} = req.body;
            const user = await getAccessType(userId);
            if (user.access == 'admin') {
                const jobs = findAllJobs();
                return res.json({...Success, jobs});
            }

            /** Course completed */
            const completed = await getUserForJob(user.student);
            if(completed.slot == null || completed.slot.active == false) {
                return res.json(AuthError);
            }
            return res.json(AuthError);
        } catch {
            logger.error({err:error, message: 'An error occured'});
            return res.json(ServerError);
        }
    }
}