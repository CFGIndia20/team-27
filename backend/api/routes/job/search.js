const {findAllJobs, findBySkill} = require('../../dbFunctions/job');
const {getAccessType, getStudentDetailsForJob} = require('../../dbFunctions/user');
const {getPresent, getTotalClasses} = require('../../dbFunctions/attendance');
const logger = require('../../../config/winston');

const {ServerError, Success, AuthError} = require('../../responses');

module.exports = {
    bySkill: async (req, res) => {
        try {
            const {userId, skills} = req.body;
            const user = await getAccessType(userId);
            if (user.access == 'admin') {
                const jobs = await findBySkill(skills);
                return res.json({...Success, jobs});
            }

            /** Course completed */
            const completed = await getStudentDetailsForJob(userId);
            if(completed.slot == null || completed.slot.active == true) {
                return res.json(AuthError);
            }

            const allClasses = await getTotalClasses(completed.slot._id);
            const presentClasses = await getPresent(completed.slot._id);
            if (presentClasses.dailyStatus.length/allClasses.dailyStatus.length < 0.8) {
                return res.json({...AuthError, message: 'You have not completed the attendance criteria'});
            }
            const jobs = findBySkill(skills);
            return res.json({...Success, jobs});
        } catch (error) {
            logger.error({err:error, message: 'An error occured'});
            return res.json(ServerError);
        }
    },
    all: async (req, res) => {
        try {
            const {userId} = req.body;
            const user = await getAccessType(userId);
            if (user.access == 'admin') {
                const jobs = await findAllJobs();
                return res.json({...Success, jobs});
            }

            /** Course completed */
            const completed = await getUserForJob(user.student);
            if(completed.slot == null || completed.slot.active == true) {
                return res.json(AuthError);
            }

            const allClasses = await getTotalClasses(completed.slot._id);
            const presentClasses = await getPresent(completed.slot._id);
            if (presentClasses.dailyStatus.length/allClasses.dailyStatus.length < 0.8) {
                return res.json({...AuthError, message: 'You have not completed the attendance criteria'});
            }
            const jobs = findBySkill(skills);
            return res.json({...Success, jobs});
        } catch (error) {
            logger.error({err:error, message: 'An error occured'});
            return res.json(ServerError);
        }
    }
}