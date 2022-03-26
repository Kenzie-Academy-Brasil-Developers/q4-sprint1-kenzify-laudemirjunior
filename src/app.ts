import express from "express";
import { router } from "./routes";
import listEndpoints from "express-list-endpoints";

const app = express();

app.use(express.json());
app.use("/users", router);

console.table(
  listEndpoints(app).map(({ methods, path }) => {
    return { methods, path };
  })
);

export default app;
