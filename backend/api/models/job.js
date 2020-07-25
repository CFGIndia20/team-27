const mongoose = require('mongoose');

const Job = new mongoose.Schema({
    addedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    skills: [{type: String, enum: ['Communication', 'Reasoning', 'Verbal']}],
    
    description: {type: String},
    company: {type: String},
    salary: {type: Number},
    appliedStudents: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
});

module.exports = mongoose.model('Job', Job);