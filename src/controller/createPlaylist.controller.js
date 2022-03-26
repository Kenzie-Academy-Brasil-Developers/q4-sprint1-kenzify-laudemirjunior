"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlaylistController = void 0;
const index_1 = require("./../configs/index");
const index_2 = require("./../services/index");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createPlaylistController = (req, res) => {
    var _a;
    const data = req.body;
    const token = (_a = req.headers.authorization) === null || _a === void 0 ? void 0 : _a.split(" ")[1];
    const userAuthenticated = jsonwebtoken_1.default.verify(token, index_1.config.secret, (_, decode) => decode);
    const user = index_2.data.find((usr) => userAuthenticated.username === usr.username);
    if (Object.keys(data).length) {
        const dataEntries = Object.entries(data);
        for (const [key, value] of dataEntries) {
            const capitalizedTitle = value[0].title
                .toLowerCase()
                .split(" ")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ");
            value[0].title = capitalizedTitle;
            value[0].listenedByMe = 0;
            if (user) {
                const playKey = user.playlist[key];
                if (playKey) {
                    playKey.push(value);
                }
                else {
                    user.playlist[key] = value;
                }
            }
        }
        res.status(200).json(user);
    }
    else {
        const { artist } = req.query;
        const { song } = req.query;
        const capitalizedSong = song
            .toLowerCase()
            .split(" ")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        const artistPlaylist = user === null || user === void 0 ? void 0 : user.playlist[artist];
        const foundSong = artistPlaylist.find((music) => music.title === capitalizedSong);
        if (foundSong) {
            foundSong.listenedByMe += 1;
            res.status(200).json(foundSong);
        }
        else {
            res.status(404).json({ error: `song ${song} not found` });
        }
    }
};
exports.createPlaylistController = createPlaylistController;
