const Teacher = require('../models/teacher');
const Teacher = require('../models/teacher');
module.exports = {
    fetchTeacherById: (userId) => {
        return Teacher.findOne({ _id: userId });
    },
    addSlotByTeacherId: (teacher, slotId) => {
        teacher.slots.push({ active: true, slotId });
        return teacher.save();
    }

}