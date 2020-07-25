const User = require('../models/user');

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
    }
}