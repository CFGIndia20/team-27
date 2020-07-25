const User = require('../models/user');

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
    }
}