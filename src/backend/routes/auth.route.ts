import express from "express";
import login from "../controllers/auth/login.controller";
import signUp from "../controllers/auth/signUp.controller";
import confirmation from "../controllers/auth/confirmation.controller";
const authRouter = express.Router();

authRouter.post("/signUp", signUp);
authRouter.post("/login", login);
authRouter.get("/confirmation/:token", confirmation);
export default authRouter;
