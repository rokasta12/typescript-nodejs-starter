
import { createPost, getAllPosts } from "../controllers/post.controller";
import { createPostSchema } from "../schemas/post.schema";
import { bodyValidator } from "../utils/body-validator";
import { Router } from "express";

export const postRouter = Router({ strict: true });

postRouter.post("/post", bodyValidator(createPostSchema), createPost);

postRouter.get("/post", getAllPosts);
