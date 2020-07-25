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
    getTeachersByList: (teachers) => {
        return Teacher.find({_id: {"$in": teachers}}).populate({path: 'slots', select: 'startTime endTime'}).populate({path: 'for', select: 'name _id email'}).sort({slots: 1});
    },
    getFreeTeachers: (start) => {
        if (start < 1400) {
            return Teacher.find({"$or": [{slots: {$size:0}},{slots: {$size:1}},{slots: {$size:2}},{slots: {$size:3}}]}).populate({path: 'slots', select: 'startTime endTime',
                match: {
                    "$and": [
                        {startTime: {$eq: start}},
                        {endTime: {$eq:start}},
                        {endTime: {$eq: start - 100}},
                        {startTime: {$eq: start + 100}},
                        {startTime: {$lte: 1400 }}
                    ]
                }
            }).where({slots: {$size: 0}}).select('_id');
        }
        return Teacher.find({"$or": [{slots: {$size:0}},{slots: {$size:1}},{slots: {$size:2}},{slots: {$size:3}}]}).populate({path: 'slots', select: 'startTime endTime',
            match: {
                "$and": [
                    {startTime: {$eq: start}},
                    {endTime: {$eq:start}},
                    {endTime: {$eq: start - 100}},
                    {startTime: {$eq: start + 100}},
                    {startTime: {$gte: 1400 }}
                ]
            }
        }).where({slots: {$size: 0}}).select('_id');
    },

    getTeacherOriginalSlots: (userId) => {
        return Slot.find({teacher: userId}).select('startDate endDate startTime endTime students').lean();
    },
    getAddedSlots: (userId) => {
        return Slot.find({teacher: {$ne: userId}, elemMatch: { 'dailyStatus.teacher': userId }}).select('dailyStatus');
    }
}