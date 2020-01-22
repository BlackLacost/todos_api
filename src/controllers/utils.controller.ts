import { NextFunction, Request, Response } from 'express';

export function makeController(serviceFunc, params) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      res.json(await serviceFunc(params(req)));
    } catch (err) {
      return next(err);
    }
  };
}
