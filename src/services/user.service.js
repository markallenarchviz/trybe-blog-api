const { User } = require('../models');
const { generateToken } = require('../utils/auth');

const validateForm = async (displayName, email, password) => {
    const displayNameMSG = { status: 400, message: '"displayName" length must be at least 8 characters long' };
    const emailMSG = { status: 400, message: '"email" must be a valid email' };
    const passwordMSG = { status: 400, message: '"password" length must be at least 6 characters long' };

    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (displayName.length < 8) throw displayNameMSG;
    if (!emailRegex.test(email)) throw emailMSG;
    if (password.length < 6) throw passwordMSG;
};

const addForm = async (displayName, email, password, image) => {

    const registeredMSG = { status: 409, message: 'User already registered' };
    const user = await User.findOne({
        where: { email },
    });

    if (user !== null) throw registeredMSG;

    const newUser = await User.create({ displayName, email, password, image });
    const token = generateToken(newUser.dataValues)
    
    return token
};

const getAllUsers = async () => {
    const users = await User.findAll({ attributes: { exclude: ['password'] } });
    return users
};



module.exports = {
    validateForm,
    addForm,
    getAllUsers,
};
