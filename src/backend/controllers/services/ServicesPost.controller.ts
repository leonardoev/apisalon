import { NextFunction, Request, Response } from "express";
import createService from "../../../Context/Service/Application/Create/createService";
const create = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  try {
    const { body } = request;
    const result = createService(body);
    response.json(result);
  } catch (e) {
    next(e);
  }
};
export default create;
