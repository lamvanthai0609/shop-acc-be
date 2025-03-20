import 'module-alias/register';

import express, { Request, Response } from 'express';
import { routers } from './apps/router';
import * as dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(
    cors({
        credentials: true,
        origin: '*',
    })
);
routers(app);

app.get('/', (req: Request, res: Response) => {
    res.send('Hello from TypeScript with Express!');
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
