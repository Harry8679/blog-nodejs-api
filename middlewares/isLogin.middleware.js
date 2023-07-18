const generateTokenFromHeader = require('../utils/generateTokenFromHeader.util');
const verifyToken = require('../utils/verifyToken.util');

const isLogin = (req, res, next) => {
    // get token from haeder
    const token = generateTokenFromHeader(req);
    // Verify the token
    const decodedUser = verifyToken(token);
    // Save the user into req object
    req.userAuth = decodedUser.id;
    if (!decodedUser) {
        return res.json({
            message: 'Token Invalid/Expiré, veuillez vous reconnecter'
        });
    } else {
        next();
    }
};

module.exports = isLogin;