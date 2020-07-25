const mongoose = require('mongoose');

const Attendance = new mongoose.Schema({
    present: [{present: {type: Boolean, default: false}, user: {type: mongoose.SchemaTypes.ObjectId, ref: 'Slot'}}]
});

module.exports = mongoose.model('Attendance', Attendance);