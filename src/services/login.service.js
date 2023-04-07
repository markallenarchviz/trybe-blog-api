const { User } = require('../models');
const generateToken = require('../utils/auth');

const authenticate = async (email, password) => {
    const requireMsg = { status: 400, message: 'Some required fields are missing' };
    if (!email || !password) throw requireMsg;

    const user = await User.findOne({
        where: { email, password },
    });

    const InvalidMsg = { status: 400, message: 'Invalid fields' };
    if (!user) throw InvalidMsg;
    const token = generateToken(user.dataValues);
    return token;
};

module.exports = {
    authenticate,
};
