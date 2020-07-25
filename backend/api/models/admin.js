const mongoose = require('mongoose');

const Admin = new mongoose.Schema({
    // addedJobs: [{
    //     active: {type: Boolean, default: false},
    //     job: {type: mongoose.Schema.Types.ObjectId, ref: 'Job'}
    // }],
    slotsCreated: [{
        active: {type: Boolean, default: false},
        slot: {type: mongoose.Schema.Types.ObjectId, ref: 'Slot'}
    }],
});

module.exports = mongoose.model('Admin', Admin);