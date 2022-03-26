import { retrieveUsersController } from "./../controller/retrieveUsers.controller";
import { loginUserController } from "./../controller/loginUser.controller";
import { createPlaylistController } from "./../controller/createPlaylist.controller";
import { validateShapeMiddleware } from "../middlewares/validateShape.middleware";
import { createPlaylistShape } from "./../shapes/createPlaylist.shape";
import { verifyAuthenticatedUserMiddleware } from "./../middlewares/verifyAuthenticatedUser.middleware";
import { verifyRequestUserMiddleware } from "./../middlewares/verifyRequestUser.middleware";
import { Router } from "express";
import { createUserController } from "./../controller/createUser.controller";
import { verifyDuplicateUserMiddleware } from "../middlewares/verifyDuplicateUser.middleware";
import { deleteSongController } from "../controller/deletePlaylist.controller";

const router = Router();

router.post(
  "/register",
  verifyRequestUserMiddleware,
  verifyDuplicateUserMiddleware,
  createUserController
);

router.post("/login", verifyRequestUserMiddleware, loginUserController);

router.get("/", verifyAuthenticatedUserMiddleware, retrieveUsersController);

router.put(
  "/playlist",
  validateShapeMiddleware(createPlaylistShape),
  verifyAuthenticatedUserMiddleware,
  createPlaylistController
);

router.delete(
  "/playlist",
  verifyAuthenticatedUserMiddleware,
  deleteSongController
);

export { router };
