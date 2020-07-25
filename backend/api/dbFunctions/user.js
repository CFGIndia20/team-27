const User = require('../models/user');
const Student = require('../models/student');
const Teacher = require('../models/teacher');
const teacher = require('../models/teacher');

module.exports = {
    addUser: async ( name, email, mobile, passwordhash, dateOfBirth, access ) => {
        if(access == 'student') {
            let student;
            student = new Student({
                uploads: [],
                skills: [],
                slot: null,
            });
            student = await student.save();

            let user = new User({
                name ,
                email,
                mobile,
                password : passwordhash,
                dateOfBirth,
                access,
                student
            });

            return user.save();
        }
        if (access == 'teacher') {
            let user = new User({
                name ,
                email,
                mobile,
                password : passwordhash,
                dateOfBirth,
                access,
            });

            user = await user.save();
            teacher = new Teacher({
                slots: [],
                for: user._id
            });
            teacher = await teacher.save();
            return User.findOneAndUpdate({_id: user._id}, {teacher: teacher._id});


        }

        let user = new User({
            name ,
            email,
            mobile,
            password : passwordhash,
            dateOfBirth,
            access,
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