const mongoose = require('mongoose');

const Attendance = new mongoose.Schema({
    present: [{present: {type: Boolean, default: false}, user: {type: mongoose.Schema.Types.ObjectId, ref: 'Slot'}}]
});

module.exports = mongoose.model('Attendance', Attendance);