const mongoose = require('mongoose');

const Admin = new mongoose.Schema({
    // addedJobs: [{
    //     active: {type: Boolean, default: false},
    //     job: {type: mongoose.SchemaTypes.ObjectId, ref: 'Job'}
    // }],
    slotsCreated: [{
        active: {type: Boolean, default: false},
        slot: {type: mongoose.SchemaTypes.ObjectId, ref: 'Slot'}
    }],
});

module.exports = mongoose.model('Admin', Admin);