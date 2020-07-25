const mongoose = require('mongoose');

const Active = new mongoose.Schema({
    teacher: {type: mongoose.SchemaTypes.ObjectId, ref: 'User'},
    
    present: [{present: {type: Boolean, default: false}, user: {type: mongoose.SchemaTypes.ObjectId, ref: 'Slot'}}]
});

module.exports = mongoose.model('Active', Active);