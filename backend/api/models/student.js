const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    uploads: [
        {
            for: {type: String, enum: ['10', '12', 'bpl', 'aadhar']},
            url: {type: String}
        }       
    ],
    skills: [{type: String, enum: ['Communication', 'Reasoning', 'Verbal']}],
    slot: {
        active: {type: Boolean, default: false},
        slot: {type: mongoose.Schema.Types.ObjectId, ref: 'Slot'}
    },
});

module.exports = mongoose.model('Student', Student);