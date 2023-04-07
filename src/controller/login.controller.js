const loginService = require('../services/login.service');

const signin = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const token = await loginService.authenticate(email, password);
        return res.status(200).json({ token });
    } catch (error) {
       next(error);
    }
};

module.exports = {
    signin,
};