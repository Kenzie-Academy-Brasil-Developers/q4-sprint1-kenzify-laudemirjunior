"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.retrieveUsersController = void 0;
const index_1 = require("./../services/index");
const retrieveUsersController = (_, res) => {
    const usersWithoutPassword = [];
    index_1.data.forEach((user) => {
        const { password } = user, userWithoutPassword = __rest(user, ["password"]);
        usersWithoutPassword.push(userWithoutPassword);
    });
    return res.status(200).json(usersWithoutPassword);
};
exports.retrieveUsersController = retrieveUsersController;
