import express from "express";
import searchAll from "../controllers/users/UsersGet.controller";
import checkAuth from "../middleware/chek-auth";
const usersRouter = express.Router();

usersRouter.get("/", checkAuth, searchAll);
export default usersRouter;
