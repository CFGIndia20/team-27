const Slot = require('../models/slot');

module.exports = {
    /** Get total number of classes */
    getTotalClasses: (id) => {
        return Slot.findOne({_id: id}).select('startTime endTime startBy endBy dailyStatus.date').lean();
    },
    getPresent: (id, userId) => {
        return Slot.findOne({_id: id}).populate({path: 'dailyStatus.attendance',
            match: {elemMatch: {'present.user': userId, 'present.present': true}}})
            .select('startTime endTime startBy endBy dailyStatus.date').lean();
    }
}