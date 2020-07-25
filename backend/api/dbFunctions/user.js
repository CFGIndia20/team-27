const User = require('../models/user');
const Student = require('../models/student');

module.exports = {
    addUser: ( name, email, mobile, passwordhash, dateOfBirth, access ) => {
        let user = new User({
            name ,
            email,
            mobile,
            password : passwordhash,
            dateOfBirth ,
            access
        });

        return user.save();
    },
    removeUser: (_id) => {
        return User.findOneAndRemove({_id});
    },
    verifyUser:  (_id) => {
        return User.findOneAndUpdate({ _id},{verified:true});
        
    },
    findUserById: (_id) => {
        return User.findOne({ _id });
    },
    findUserByEmail: (email) => {
        return User.findOne({ email });
    },
    getAccessType: (id) => {
        return User.findOne({_id: id});
    },
    removeSlotFromUser: (userId) => {
        return Student.findOneAndUpdate({_id: userId}, {slot: null})
    },
    addSlotToUser: (slot, userId) => {
        return Student.findOneAndUpdate({_id: userId}, {slot: slot})
    },
    getStudentDetailsForJob: (id) => {
        return Student.findOne({_id: id}).populate({path: 'slot'});
    },
    getAllUnverified: () => {
        return User.find({verified: false, access: {$ne: 'admin'}}).select('name email _id');
    }
}