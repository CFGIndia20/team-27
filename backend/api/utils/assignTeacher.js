const {slotDetails, addTeacherToSlot} = require('../dbFunctions/slot');
const {getFreeTeachers} = require('../dbFunctions/teacher');

module.exports = (slotId) => {
    try {
        const slot = await slotDetails(slotId);
        if (slot == null) return;
        const teachers = await getFreeTeachers(slot.startTime);
        const added = await addTeacherToSlot(slotId, teachers[0]._id);
        if (added == null) return; // Send mail to admin to manually assign
        else return;
    } catch (err) {
        return; // Send mail to admin to manually assign
    }
}