import { NextFunction, Request, Response } from "express";
import signUpUser from "../../../Context/User/Application/SignUp";
const signUp = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { body } = request;
    const { personalData, credentials } = body;
    const result = await signUpUser(personalData, credentials);
    response.json(result);
  } catch (e) {
    next(e);
  }
};
export default signUp;
