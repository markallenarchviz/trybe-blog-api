const userService = require('../services/user.service');

const signup = async (req, res, next) => {
    try {
        const { displayName, email, password, image } = req.body;
        await userService.validateForm(displayName, email, password, image);
        const token = await userService.addForm(displayName, email, password, image);
        return res.status(201).json({ token });
    } catch (err) {
       next(err);
    }
};

const getAllUsers = async (_req, res, next) => {
    try {
        const allUsers = await userService.getAllUsers();
        return res.status(200).json(allUsers);
    } catch (err) {
       next(err);
    }
};

module.exports = {
    signup,
    getAllUsers,
};