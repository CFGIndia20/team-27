const mongoose = require('mongoose');

const Teacher = new mongoose.Schema({
    slots: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Slot'}],
    for: {type:  mongoose.SchemaTypes.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('Teacher', Teacher);