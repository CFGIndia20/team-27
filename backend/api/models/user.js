const mongoose = require('mongoose');

const User = new mongoose.Schema({
    verified: {type: Boolean, default: false},

    name: {type: String},
    email: {type: String},
    mobile: {type: Number},
    password: {type: String},
    dateOfBirth: {type: Date},
    access: {type: String, enum: ['student', 'admin', 'teacher']},
    joinedAt: {type: Date, default: new Date()},

    student: {type: mongoose.Schema.Types.ObjectId, ref: 'Student'},
    teacher: {type: mongoose.Schema.Types.ObjectId, ref: 'Teacher'},
    admin: {type: mongoose.Schema.Types.ObjectId, ref: 'Admin'}
});

module.exports = mongoose.model('User', User);
