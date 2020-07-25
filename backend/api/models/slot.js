const mongoose = require('mongoose');

const Slot = new mongoose.Schema({
    addedBy: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    teacher: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    students: [{
        joinedOn: {type: Date, default: new Date()},
        user: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'}
    }],
    
    startBy: {type: Date},
    endBy: {type: Date},
    startTime: {type: String},
    endTime: {type: String},

    dailyStatus: [
        {
            teacher: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
            date: {type: Date},
            attendance: {type: mongoose.SchemaType.ObjectId, ref: 'Attendance'}
        }
    ]
});

module.exports = mongoose.model('Slot', Slot);