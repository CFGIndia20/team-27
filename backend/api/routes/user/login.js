const {findUserByEmail} = require('../../dbFunctions/user');
const logger = require('../../../config/winston');
const { Success,AuthError, ServerError, Forbidden, ValidationError } = require('../../responses');
const { verify } = require('../../utils/password');
const { generate } = require('../../utils/jwt');
const { validationResult } = require('express-validator');


module.exports = async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.json({...ValidationError, err:errors.array()});
    }
    try {
        const { email, password } = req.body;
        const user = await findUserByEmail(email);
        const confirmation = await verify(password, user.password);
        if (!confirmation) return res.json({ ...AuthError, message: "Incorrect credentials" });
        if (!user.verified && user.access != 'admin') return res.json({ ...Forbidden, message: "Please wait to be verified by an admin" });
        let token = await generate({ id: user.id });
        return res.json({ ...Success, access:user.access, name: user.name, token:token.token});
    } catch(error) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}