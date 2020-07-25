const mongoose = require('mongoose');

const Teacher = new mongoose.Schema({
    slots: [{
        active: {type: Boolean, default: false},
        slot: {type: mongoose.SchemaTypes.ObjectId, ref: 'Slot'}
    }],
});

module.exports = mongoose.model('Teacher', Teacher);