"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyAuthenticatedUserMiddleware = void 0;
const index_1 = require("./../services/index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const configs_1 = require("../configs");
const verifyAuthenticatedUserMiddleware = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(400).json({ message: "missing header authorization." });
    }
    const token = req.headers.authorization.split(" ")[1];
    jsonwebtoken_1.default.verify(token, configs_1.config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: "Invalid token" });
        }
        const userAuthenticated = index_1.data.find((usr) => usr.username === decoded.username);
        req.userAuthenticated = userAuthenticated;
    });
    return next();
};
exports.verifyAuthenticatedUserMiddleware = verifyAuthenticatedUserMiddleware;
