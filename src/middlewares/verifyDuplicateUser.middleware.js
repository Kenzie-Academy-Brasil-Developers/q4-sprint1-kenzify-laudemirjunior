"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyDuplicateUserMiddleware = void 0;
const index_1 = require("./../services/index");
const verifyDuplicateUserMiddleware = (req, res, next) => {
    const { username } = req.body;
    const user = index_1.data.find((item) => item.username === username);
    if (user) {
        return res.status(422).json({ message: "You can not use this username." });
    }
    return next();
};
exports.verifyDuplicateUserMiddleware = verifyDuplicateUserMiddleware;
