import express, { Response, Request, NextFunction } from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import dotEnv from "dotenv";

import authRouter from "./routes/auth.route";
import usersRouter from "./routes/users.route";
import servicesRouter from "./routes/services.route";
dotEnv.config();
const app = express();

app.use(morgan("dev"));
app.use(bodyParser.json());

app.use("/auth", authRouter);
app.use("/users", usersRouter);
app.use("/services", servicesRouter);
app.use((request, response, next) => {
  const error = new Error("Not Found");
  error.stack = "404";
  next(error);
});

app.use((error: Error, req: Request, res: Response, next: NextFunction) => {
  res.status(parseInt(error.stack as string) || 500);
  res.json({
    error: {
      status: parseInt(error.stack as string) || 500,
      detail: error.message,
    },
  });
});

app.listen(8080, () => {
  console.log("listen on port 8080");
});
