import { Router } from "express";
import helloRoute from "./hello.route";
import { errorMiddleWare } from "../middleware/error.middleware";

export const routes = Router();

routes.use("/", helloRoute);
