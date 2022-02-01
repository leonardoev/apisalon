import { NextFunction, Request, Response } from "express";
import verificationUser from "../../Context/User/Application/Verification";
const checkAuth = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const token = request.headers.authorization?.split(" ")[1] as string;
    const decoded = verificationUser(token);
    request.body.userData = decoded;
    next();
  } catch (e) {
    next(e);
  }
};
export default checkAuth;
