const User = require('../../models/userModel');

async function userDetailsController(req, res) {
    try {
        console.log("userId in controller:", req.userId); 

        const user = await User.findByPk(req.userId); 

        if (!user) {
            return res.status(404).json({
                message: "User not found",
                error: true,
                success: false
            });
        }

        res.status(200).json({
            data: user,
            error: false,
            success: true,
            message: "User details"
        });

        console.log("user", user);

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = userDetailsController;