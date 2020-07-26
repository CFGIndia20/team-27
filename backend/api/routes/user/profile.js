const { findUserById } = require("../../dbFunctions/user");
const { AuthError, Success } = require("../../responses");


module.exports = async (req, res) => {
    try {
        const { userId } = req.body;
        const user = await findUserById(userId);
        if (!user) return res.json({ ...AuthError, msg: "User not found" });
        return res.json({ ...Success, user });
    }
    catch(error) {
        logger.error({err:error, message: "An error occured"});
        return res.json(ServerError);
    }
}