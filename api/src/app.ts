import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import routerPoll from "./routes/poll.routes";
import getMongoDBConnection from "./db/mongoDBConfig";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

getMongoDBConnection();

app.use('/lobby', routerPoll)
app.get('/', (req: Request, res:Response) => res.status(301).redirect('/lobby'));
app.get('*', (req: Request, res: Response) => res.status(404).json({ _message: `Route ${req.url} not found`, _status: res.statusCode }))

const PORT: number = parseInt(process.env.PORT || '8080', 10);
const HOST: string = process.env.HOST || '0.0.0.0';
app.listen(PORT, HOST, () => console.log(`Server running in http://${HOST}:${PORT}`));