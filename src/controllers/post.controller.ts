import { Request, Response } from "express";
import prisma from "../prisma";


export const createPost = async (req: Request, res: Response) => {
    const { body } = req;
    console.log(body);
    const postNew = await prisma.post.create(
        {
            data: {
                ...body
            }
        }
    )
    return res.json(postNew);
}

export const getAllPosts = async (req: Request, res: Response) => {
    const posts = await prisma.post.findMany();
    return res.json(posts);
}