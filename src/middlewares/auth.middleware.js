const { validadateToken } = require('../utils/auth');

const authToken = (req, _res, next) => {
    try {
        const { authorization } = req.headers;
        validadateToken(authorization);
        next();
    } catch (err) {
        const msg = { status: 401, message: 'Expired or invalid token' };
        if (err.message === 'invalid token' || err.message === 'jwt malformed') throw msg;
        next(err);
    }
};

module.exports = authToken;