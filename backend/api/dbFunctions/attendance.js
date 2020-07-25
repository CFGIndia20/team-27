const Attendance = require('../models/attendance');

module.exports = {
    /**
     * @desc Add attendance
     */
    addAttendance: (attendance) => {
        let active = new Attendance({
            attendance
        });
        return active.save();
    },
}