import { studentRouter } from "./StudentRouter";
import { Router } from "express";

const userRouter = Router();

userRouter.use("/students", studentRouter);

export { userRouter };
