import express from "express";
import { userRouter } from "./routers/users/";

const app = express();
app.use(express.json());
app.use(express.json());

app.use("/users", userRouter);

app.listen(3333, () => console.log("Server is running 🚀"));
