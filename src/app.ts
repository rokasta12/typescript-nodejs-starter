import express from 'express';
import { Request, Response } from 'express';
import { postRouter } from './routes/post.router';


const app = express();

app.use(express.json());

app.use(postRouter)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
}
);

export default app;