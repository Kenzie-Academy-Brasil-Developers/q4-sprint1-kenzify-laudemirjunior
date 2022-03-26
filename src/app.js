"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const express_list_endpoints_1 = __importDefault(require("express-list-endpoints"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use("/users", routes_1.router);
console.table((0, express_list_endpoints_1.default)(app).map(({ methods, path }) => {
    return { methods, path };
}));
exports.default = app;
