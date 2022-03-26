import * as yup from "yup";
import { v4 } from "uuid";
import { createPlaylistShape } from "./createPlaylist.shape";

export const createUserShape = yup.object().shape({
  id: yup.string().default(() => v4()),
  username: yup.string().required("username is a required field"),
  password: yup.string().min(4).required("password is required field"),
  playlist: yup.object().default({}),
});
