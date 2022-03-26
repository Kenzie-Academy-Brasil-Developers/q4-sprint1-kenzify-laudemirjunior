"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePlaylistController = void 0;
const updatePlaylistController = (req, res) => {
    const { user } = req;
    const { playlist } = user;
    const { artist, song } = req.query;
    const music = playlist[artist].find((item) => item.title === song);
    music.listenedByMe += 1;
    res.status(200).json(music);
};
exports.updatePlaylistController = updatePlaylistController;
