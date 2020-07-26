const {getFreeTeachers,getTeachersByList} = require('../../dbFunctions/teacher');

const {getSlot} = require('../../dbFunctions/slot');
const logger = require('../../../config/winston');
const {ServerError, AuthError, Success} = require('../../responses');

module.exports = async (req, res) => {
    try {
        const {slotId, userId} = req.body;
        const slot = await getSlot(slotId,userId);
        if (slot == null) return res.json(ServerError);

        let teachers = await getFreeTeachers(slot.startTime);
        let temp = [];
        teachers.forEach((element) => {
            temp.push(element._id);
        })
        teachers = await getTeachersByList(temp);

        return res.json({...Success, teachers: teachers});
    } catch (error) {
        console.log(error);
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);   
    }
}