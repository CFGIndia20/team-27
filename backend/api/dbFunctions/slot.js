const Slot = require('../models/slot');

module.exports = {
    addSlot: (userID, startDate, startTime, endTime) => {
        let slot = new Slot({
            addedBy: userID,
            startDate,
            startTime,
            endTime
        });

        return slot.save();
    },
    removeSlot: (id, userID) => {
        return Slot.findOneAndRemove({_id: id, addedBy: userID});
    }
}