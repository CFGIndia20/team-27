const {addUser, findUserByEmail} = require('../../dbFunctions/user');
const logger = require('../../../config/winston');
const { ServerError, Success, Conflict, ValidationError } = require('../../responses');
const { hash } = require('../../utils/password');
const { generate } = require('../../utils/jwt');
const { validationResult } = require('express-validator');

module.exports = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.json({...ValidationError, err:errors.array()});
    }
    try {
        const { name, email, mobile, password, dateOfBirth, access } = req.body;
        const existing_user = await findUserByEmail(email);
        if (existing_user) return res.json({ ...Conflict, message: "Email already exists with an account" });
        let passwordhash = await hash(password);
        const user = await addUser(name, email, mobile, passwordhash, dateOfBirth, access);
        if (user == null) return res.json({...ServerError, message: "Error registering user"});
        let token = await generate({ id: user.id });
        return res.json({ ...Success, user, token });
    } catch(error) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}