const mongoose = require('mongoose');

const Teacher = new mongoose.Schema({
    slots: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Slot'}],
});

module.exports = mongoose.model('Teacher', Teacher);