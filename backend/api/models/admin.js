const mongoose = require('mongoose');

const Admin = new mongoose.Schema({
    // addedJobs: [{
    //     active: {type: Boolean, default: false},
    //     job: {type: mongoose.Schema.Types.ObjectId, ref: 'Job'}
    // }],
    slotsCreated: [{type: mongoose.SchemaTypes.ObjectId, ref: 'Slot'}],
});

module.exports = mongoose.model('Admin', Admin);