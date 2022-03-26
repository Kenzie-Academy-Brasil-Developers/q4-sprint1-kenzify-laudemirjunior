import dotenv from "dotenv";

dotenv.config();

export const config: { secret: any; expiresIn: string } = {
  secret: process.env.SECRET,
  expiresIn: "1h",
};
