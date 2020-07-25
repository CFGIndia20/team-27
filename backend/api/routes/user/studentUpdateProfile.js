const fs = require('fs');
const { BadRequest, ServerError } = require('../../responses');
const logger = require('../../../config/winston');  
    
module.exports = async (req, res) => {
    try {
        const file = req.file;
        const { skills } = req.body;
        console.log(file);
        if (!file) return res.json({ ...BadRequest, msg: "Please choose a file" });
        return res.json({ ...Success});
    } catch(error) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}