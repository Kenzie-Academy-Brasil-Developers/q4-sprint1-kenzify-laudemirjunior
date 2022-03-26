"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPlaylistController = void 0;
const index_1 = require("./../services/index");
const createPlaylistController = (req, res) => {
    const data = req.body;
    const { userAuthenticated } = req;
    const user = index_1.data.find((usr) => userAuthenticated.username === usr.username);
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
        delete user.password;
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
