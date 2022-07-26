import express from "express";

import { postComment } from "../controllers/comment.js";

import auth from "../middlewares/auth.js";

const commentRoutes = express.Router();
commentRoutes.patch("/post/:id", auth, postComment);

export default commentRoutes;
