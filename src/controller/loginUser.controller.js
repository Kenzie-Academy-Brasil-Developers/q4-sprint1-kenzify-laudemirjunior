"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUserController = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const index_1 = require("./../services/index");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const configs_1 = require("../configs");
const loginUserController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const user = index_1.data.find((item) => item.username === username);
    if (!user) {
        return res.status(401).json({ message: "Wrong credentials. Try again!" });
    }
    const match = yield bcryptjs_1.default.compare(password, user.password);
    if (!match) {
        return res.status(401).json({ message: "Wrong credentials. Try again!" });
    }
    const token = jsonwebtoken_1.default.sign({ username }, configs_1.config.secret, {
        expiresIn: configs_1.config.expiresIn,
    });
    return res.status(200).json({ accessToken: token });
});
exports.loginUserController = loginUserController;
