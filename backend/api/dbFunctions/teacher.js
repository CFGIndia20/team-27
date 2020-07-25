const Teacher = require('../models/teacher');
const Slot = require('../models/slot');

module.exports = {
    fetchTeacherById: (userId) => {
        return Teacher.findOne({ _id: userId });
    },
    addSlotByTeacherId: (teacher, slotId) => {
        teacher.slots.push({ active: true, slotId });
        return teacher.save();
    },
    getFreeTeachers: (startTime) => {
        let startTimeAlt = [startTime.split("")[0], parseInt(startTime.split("")[1]) + 2, startTime.split("").splice(2,)]
        startTimeAlt = startTime.join("");

        return Teacher.find({slots: {$size: {$ne: 4}}}).populate({path: 'slots.slot', select: 'startTime endTime',
            match: { startTime: {$ne: startTime}, startTime: {$ne: startTimeAlt} }})
            .sort({'slots': 1}).select('name email _id');
    }
}