const mongoose = require('mongoose');

const Slot = new mongoose.Schema({
    addedBy: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    teacher: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    students: [{type: mongoose.SchemaTypes.ObjectId, ref: 'User'}],
    
    startBy: {type: Date},
    startTime: {type: String},
    endTime: {type: String},

    dailyStatus: [{date: {type: Date}, status: {type: mongoose.SchemaType.ObjectId, ref: 'Active'}}]
});

module.exports = mongoose.model('Slot', Slot);