const {getFreeTeachers} = require('../../dbFunctions/teacher');

const {getSlot} = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, AuthError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {slotId, userId} = req.body;
        const slot = await getSlot(slotId);
        if (slot == null) return res.json(ServerError);

        const teachers = await getFreeTeachers(slot.startTime);

        return res.json({...Success, teachers: teachers});
    } catch (err) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);   
    }
}