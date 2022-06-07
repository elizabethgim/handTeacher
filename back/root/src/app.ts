import express from "express";
import { indexRouter } from "./routes/indexRouter";
import { handRouter } from "./routes/handRouter";

import morgan from "morgan";

import { errorMiddleware } from "./middlewares/errorMiddleware";

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(indexRouter);
app.use(handRouter);

app.use(errorMiddleware);
export { app };
