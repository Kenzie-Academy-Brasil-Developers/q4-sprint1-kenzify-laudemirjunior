import { NewRequest } from "./../@types/request.type";
import { NextFunction, Response } from "express";

export const validateShapeMiddleware =
  (shape: any) =>
  async (req: NewRequest, res: Response, next: NextFunction) => {
    try {
      const validated = await shape.validate(req.body, {
        abortEarly: false,
        stripUnknown: true,
      });
      req.validated = validated;
      return next();
    } catch (e: any) {
      return res.status(400).json({ error: e.errors });
    }
  };
