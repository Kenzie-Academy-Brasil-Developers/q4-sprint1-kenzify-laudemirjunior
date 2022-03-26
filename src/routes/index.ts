import { Router } from "express";
import {
  createPlaylistController,
  createUserController,
  deleteSongController,
  loginUserController,
  retrieveUsersController,
} from "../controller";
import {
  validateShapeMiddleware,
  verifyAuthenticatedUserMiddleware,
  verifyDuplicateUserMiddleware,
  verifyRequestUserMiddleware,
} from "../middlewares";
import { createPlaylistShape } from "../shapes";

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
