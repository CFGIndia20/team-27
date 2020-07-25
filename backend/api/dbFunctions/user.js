const User = require('../models/user');
const Student = require('../models/student');

module.exports = {
    addUser: ( _name, _email, _mobile, _passwordhash, _dateOfBirth, _access ) => {
        let user = new User({
            name = _name,
            email = _email,
            mobile = _mobile,
            password = _passwordhash,
            dateOfBirth = _dateOfBirth,
            access = _access
        });

        return user.save();
    },
    removeUser: (id) => {
        return User.findOneAndRemove({_id: id});
    },
    verifyUser: (id) => {
        let user = User.findOne({ _id: id });
        return user.save();
    },
    findUserById: (id) => {
        let user = User.findOne({ _id: id });
    },
    findUserByEmail: (email) => {
        let user = User.findOne({ email: email });
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
    }
}