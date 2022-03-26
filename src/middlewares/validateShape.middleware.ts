import { Request, Response, NextFunction } from "express";

export const validateShapeMiddleware =
  (shape: any) =>
  async (req: Request | any, res: Response, next: NextFunction) => {
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
