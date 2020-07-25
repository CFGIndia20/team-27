const Slot = require('../models/slot');

module.exports = {
    /** Get total number of classes */
    getTotalClasses: (id) => {
        return Slot.findOne({_id: id}).select('startTime endTime startBy endBy dailyStatus').lean();
    },
    getPresent: (id, userId) => {
        return Slot.findOne({_id: id}).populate({path: 'dailyStatus.attendance',
            match: {'present.user': userId, 'present.present': true}})
            .select('dailyStatus startTime endTime').lean();
    }
}