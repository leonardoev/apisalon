import { NextFunction, Request, Response } from "express";
import searchAllUsers from "../../../Context/User/Application/SearchAll";
const searchAll = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const result = await searchAllUsers();
    response.json(result);
  } catch (e) {
    next(e);
  }
};
export default searchAll;
