import { NextFunction, Request, Response } from "express";
import loginUser from "../../../Context/User/Application/LogIn";
const login = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { body } = request;
    const result = await loginUser(body);
    response.json(result);
  } catch (e) {
    next(e);
  }
};
export default login;
