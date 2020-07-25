const Slot = require('../models/slot');

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
        return Slot.findOneAndUpdate({_id: id}, {teacher: null})
    },

    /**
     * @desc Get slot by ID
     */
    getSlot: (id, userID) => {
        return Slot.findOne({_id: id, "$or": [{teacher: userID},{addedBy: userID},{students: userID}, {'dailyStatus.teacher': userID}]})
            .populate({path: 'students', select: 'name email'})
            .populate({path: 'teacher', select: 'name email'});
    },


}