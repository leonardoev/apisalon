import express from "express";
import searchAll from "../controllers/users/UsersGet.controller";
import checkAuth from "../middleware/chek-auth";
const servicesRouter = express.Router();

servicesRouter.get("/", checkAuth, searchAll);
export default servicesRouter;
