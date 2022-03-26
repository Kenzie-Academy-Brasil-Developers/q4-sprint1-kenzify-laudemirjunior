import { data } from "./../services/index";
import { Response } from "express";

export const deleteSongController = (req: any, res: Response) => {
  const { userAuthenticated } = req;

  const user: any | undefined = data.find(
    (usr) => userAuthenticated.username === usr.username
  );

  const { artist } = req.query;
  const { song } = req.query;

  const capitalizedSong = song
    .toLowerCase()
    .split(" ")
    .map((word: string) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  const artistPlaylist: any = user?.playlist[artist];

  const foundSong = artistPlaylist.find(
    (music: any) => music.title === capitalizedSong
  );

  if (foundSong) {
    artistPlaylist.pop(foundSong);

    res.status(204).json("");
  } else {
    res.status(404).json({ error: `song ${song} not found` });
  }
};
