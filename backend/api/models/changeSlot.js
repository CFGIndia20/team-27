const mongoose = require('mongoose');

const ChangeSlot = new mongoose.Schema({
    by: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
 
    slot: {type: mongoose.SchemaTypes.ObjectId, ref: 'Slot'},
    date: {type: Date},
    
    actionTaken: {type: Boolean, default: false}
});

module.exports = mongoose.model('ChangeSlot', ChangeSlot);