import { Request } from "express";

export interface NewRequest extends Request {
  user?: any;
  validated?: any;
}
