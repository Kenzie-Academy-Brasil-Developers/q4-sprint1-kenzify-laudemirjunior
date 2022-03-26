"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyRequestUserMiddleware = void 0;
const verifyRequestUserMiddleware = (req, res, next) => {
    const { username, password } = req.body;
    if (!username) {
        return res.status(400).json({ errors: ["fieldName is a required field"] });
    }
    if (!password) {
        return res.status(400).json({ errors: ["password is a required field"] });
    }
    return next();
};
exports.verifyRequestUserMiddleware = verifyRequestUserMiddleware;
