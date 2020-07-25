const Slot = require('../models/slot');
const Attendance = require('../models/attendance');
const ChangeSlot = require('../models/changeSlot');

module.exports = {
    /**
     * @desc Adding a slot to the admin
     */
    addSlot: (userID, startDate, endDate, startTime, endTime) => {
        let slot = new Slot({
            addedBy: userID,
            startBy: startDate,
            endBy: endDate,
            startTime,
            endTime
        });

        return slot.save();
    },

    /**
     * @desc Removing a slot
     */
    removeSlot: (id, userID) => {
        return Slot.findOneAndRemove({_id: id, addedBy: userID});
    },

    /** 
     * @desc Slot details
     **/
    slotDetails: (id) => {
        return Slot.findOne({_id: id});
    },

    /**
     * @desc Add user to the slot
     */
    addUserToSlot: (id, userID) => {
        return Slot.findOneAndUpdate({_id: id}, {"$push": {students: {user: userID}}})
    },

    /**
     * @desc Remove user from the slot
     */
    removeUserFromSlot: (id, userID) => {
        return Slot.findOneAndUpdate({_id: id}, {"$pull": {'students.user': userID}})
    },

    /**
     * @desc Add teacher to the slot
     */
    addTeacherToSlot: (id, userID) => {
        return Slot.findOneAndUpdate({_id: id}, {teacher: userID})
    },

    /**
     * @desc Remove teacher from the slot
     */
    removeTeacherFromSlot: (id) => {
        return Slot.findOneAndUpdate({_id: id}, {teacher: null, dailyStatus: null});
    },

    /**
     * @desc Get slot by ID
     */
    getSlot: (id, userID) => {
        return Slot.findOne({_id: id, '$or': [{teacher: userID},{addedBy: userID},{'students.user': userID}, {'dailyStatus.teacher': userID}]})
            .populate({path: 'students.user', select: 'name email'})
            .populate({path: 'teacher', select: 'name email'});
    },

    /** 
     * @desc Get all slots
     */
    getAllSlots: () => {
        return Slot.find({});
    },

    hasTeacherAccess: (id, userId) => {
        return Slot.findOne({_id: id, teacher: userId});
    },
    hasAdminAccess: (id, userId) => {
        return Slot.findOne({_id: id, addedBy: userId}).populate({path: 'teacher', select: 'name email'}).lean();
    },
    hasUserAccess:(id, userId) => {
        return Slot.findOne({_id: id, 'students.user': userId})
    },
    
    getCreatedByUser: (userId) => {
        return Slot.find({addedBy: userId}).populate({path: 'teacher', select: 'name email'}).lean();

    },

    /**
     * Add attendance
     */
    addAttendance: (id, date, userId, attendanceId) => {
        return Slot.findOneAndUpdate({_id: id, $elemMatch: {'dailyStatus.date': date, 'dailyStatus.teacher': userId}},{'dailyStatus.$.attendance': attendanceId});
    },
    createAttendance: (attendance) => {
        let active = new Attendance({
            attendance
        });
        return active.save();
    },

    /** Add a slot change request */
    getSwitchRequests: (userId) => {
        return ChangeSlot.find({actionTaken: false}).populate({path: 'slot', match: {addedBy: userId}});
    },

    addSlotChangeRequest: (by, slot, date ) => {
        let change = new ChangeSlot({
            by,
            slot,
            date,
        });
        return change.save();
    },
    changeSlotChangeStatus: (id) => {
        return ChangeSlot.findByIdAndUpdate({_id: id}, {actionTaken: true});
    },
    allocateSlotToTeacher: (id, date, userId, teacherId) => {
        return Slot.findOneAndUpdate({_id: id, addedBy: userId, $elemMatch: {'dailyStatus.date': date }},{'dailyStatus.$.teacher': teacherId});        
    },
}