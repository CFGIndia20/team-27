const fs = require('fs');
const User = require('../../models/user');
const Student = require('../../models/student');
const { BadRequest, ServerError, Success } = require('../../responses');
const logger = require('../../../config/winston');  
    
module.exports = async (req, res) => {
    try {
        const {c10Upload, c12Upload, bpl, aadhar, skills, userId} = req.body;

        const user = await User.findOne(userId);
        if (c10Upload != undefined) {
            await Student.findOneAndUpdate({_id: user.student}, {"$push": {for: '10', url: c10Upload}})
        }
        if (c12Upload != undefined) {
            await Student.findOneAndUpdate({_id: user.student}, {"$push": {for: '12', url: c12Upload}})
        }
        if (aadhar != undefined) {
            await Student.findOneAndUpdate({_id: user.student}, {"$push": {for: 'aadhar', url: aadhar}})
        }
        if (bpl != undefined) {
            await Student.findOneAndUpdate({_id: user.student}, {"$push": {for: 'bpl', url: bpl}});
        }

        if (skills != undefined) {
            await Student.findOneAndUpdate({_id: user.student}, {skills});
        }
 
        return res.json(Success);
    } catch(error) {
        console.log(error);
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}