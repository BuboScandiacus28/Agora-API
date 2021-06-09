import { NextFunction, Request, Response } from "express";
import {
  ExpressErrorMiddlewareInterface,
  Middleware,
} from "routing-controllers";

@Middleware({ type: "after" })
export class GlobalErrorHandler implements ExpressErrorMiddlewareInterface {
  error(
    error: Error,
    request: Request,
    response: Response,
    next: () => NextFunction
  ): void {
    response.send({ ERROR: error });
    next();
  }
}
