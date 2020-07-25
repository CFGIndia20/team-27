const mongoose = require('mongoose');

const ChangeSlot = new mongoose.Schema({
    by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
 
    slot: {type: mongoose.Schema.Types.ObjectId, ref: 'Slot'},
    date: {type: Date},
    
    actionTaken: {type: Boolean, default: false}
});

module.exports = mongoose.model('ChangeSlot', ChangeSlot);