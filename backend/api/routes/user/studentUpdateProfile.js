const fs = require('fs');
const { BadRequest, ServerError } = require('../../responses');
const logger = require('../../../config/winston');  
    
module.exports = async (req, res) => {
    try {
        const file = req.file;
        console.log(req.file);
        console.log(req);
        if (!file) return res.json({ ...BadRequest, msg: "Please choose a file" });
        return res.json({ ...Success});
    } catch(error) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}