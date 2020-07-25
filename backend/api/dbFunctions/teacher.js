const Teacher = require('../models/teacher');
const Slot = require('../models/slot');

module.exports = {
    fetchTeacherById: (userId) => {
        return Teacher.findOne({ _id: userId });
    },
    addSlotForTeacher: (teacher, slotId) => {
        teacher.slots.push({ active: true, slotId });
        return teacher.save();
    },
    getFreeTeachers: (startTime) => {
        if (startTime < 1400) {
            return Teacher.find({slots: {$size: {$ne: 4}}}).populate({path: 'slots.slot', select: 'startTime endTime',
            match: { 
                "$and": [
                    {startTime: {$ne: startTime}, endTime: {$ne:startTime}, endTime: {$ne: startTime - 100}, startTime: {$ne: startTime + 100}},
                    {endTime: {$lte: 1400 }}
                ]
            }}).sort({'slots': 1}).select('name email _id');
        }
        return Teacher.find({slots: {$size: {$ne: 4}}}).populate({path: 'slots.slot', select: 'startTime endTime',
            match: { 
                "$and": [
                    {startTime: {$ne: startTime}, endTime: {$ne:startTime}, endTime: {$ne: startTime - 100}, startTime: {$ne: startTime + 100}},
                    {startTime: {$gte: 1400 }}
                ]
            }}).sort({'slots': 1}).select('name email _id');
    }
}