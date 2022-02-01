import { NextFunction, Request, Response } from "express";
import confirmationUser from "../../../Context/User/Application/Confirmation";
import loginUser from "../../../Context/User/Application/LogIn/logInUser";
import login from "./login.controller";

const confirmation = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const token: string = request.params.token;
    const result = await confirmationUser(token);
    response.json(result);
  } catch (e) {
    next(e);
  }
};
export default confirmation;
