import dotenv from "dotenv";

dotenv.config();

export const config: {
  secret: any;
  expiresIn: any;
} = {
  secret: process.env.SECRET,
  expiresIn: process.env.EXPIRESIN,
};
