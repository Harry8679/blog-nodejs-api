const generateTokenFromHeader = req => {
    // Get token from header
    const headersObject = req.headers;

    const token = headersObject['authorization'].split(' ')[1];

    if (token !== undefined) {
        return token;
    } else {
        return false;
    }
};

module.exports = generateTokenFromHeader;