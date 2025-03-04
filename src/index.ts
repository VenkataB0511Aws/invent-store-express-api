import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";


dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

/* Route imports */
import dashboardRoute from "./routes/dashboardRoute";

/* Config */
dotenv.config();


app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get('/', (req: Request, res: Response) => {
  res.send('Hello from Express and TypeScript!');
});

/* Routes */
app.use("/dashboard", dashboardRoute); 

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;