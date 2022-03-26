"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUserCredentials = void 0;
const index_1 = require("./../services/index");
const verifyUserCredentials = (req, res, next) => {
    const { password, username } = req.body;
    const user = index_1.data.find((item) => item.username === username);
    if (!user || user.password !== password) {
        return res.status(401).json({ message: "wrong credentials" });
    }
    return next();
};
exports.verifyUserCredentials = verifyUserCredentials;
