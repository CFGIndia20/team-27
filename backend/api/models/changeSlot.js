const mongoose = require('mongoose');

const ChangeSlot = new mongoose.Schema({
    by: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    for: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},

    slot: {type: mongoose.SchemaTypes.ObjectId, ref: 'Slot'},
    date: {type: mongoose.SchemaTypes.ObjectId, ref: 'Active'},
});

module.exports = mongoose.model('ChangeSlot', ChangeSlot);