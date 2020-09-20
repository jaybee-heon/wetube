import express from "express";

const userRouter = express.Router();

const userIndexHandler = (req, res) => res.send("User index");
const userEditHandler = (req, res) => res.send("User Edit");

userRouter.get("/", userIndexHandler);
userRouter.get("/edit", userEditHandler);

export default userRouter;
