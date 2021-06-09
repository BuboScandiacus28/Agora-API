import express from "express";
import dotenv from "dotenv";
import { useExpressServer } from "routing-controllers";
import path from "path";
import cors from "cors";

dotenv.config();
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(cors());

console.log(__dirname);

useExpressServer(app, {
  controllers: [path.join(__dirname, "/controllers/**/*.ts")],
  middlewares: [path.join(__dirname, "/middlewares/**/*.ts")],
  defaultErrorHandler: false,
});

app.listen(port, () => console.log(`Running on port ${port}`));
