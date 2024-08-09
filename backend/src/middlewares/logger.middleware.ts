import { Request, Response, NextFunction } from "express";
import logger from "../config/logger.config";

export const loggerMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  logger.info(`${req.method} ${req.url}`);
  next();
};
