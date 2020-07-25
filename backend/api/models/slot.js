const mongoose = require('mongoose');

const Slot = new mongoose.Schema({
    addedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User',default:null},
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'User',default:null},
    students: [{
        joinedOn: {type: Date, default: new Date()},
        user: {type: mongoose.Schema.Types.ObjectId, ref: 'User',default: null}
    }],
    active: {type: Boolean, default: true},
    
    startBy: {type: Date},
    endBy: {type: Date},
    startTime: {type: Number},
    endTime: {type: Number},

    dailyStatus: [
        {
            teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'User', default:null},
            date: {type: Date},
            attendance: {type: mongoose.Schema.Types.ObjectId, ref: 'Attendance',default:null}
        }
    ]
});

module.exports = mongoose.model('Slot', Slot);