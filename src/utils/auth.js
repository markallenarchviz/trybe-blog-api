const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET;
const configJWT = {
    expiresIn: '1y',
    algorithm: 'HS256',
};

const generateToken = (payload) => {
    const token = jwt.sign(payload, secretKey, configJWT);
    return token;
};

const validadateToken = (token) => {
    const InvalidMsg = { status: 401, message: 'Token not found' };
    if (!token) throw InvalidMsg;
    const isValid = jwt.verify(token, secretKey);
    console.log(isValid);
    return isValid;
};

module.exports = {
    generateToken,
    validadateToken,
};