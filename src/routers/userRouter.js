import express from "express";
import routes from "../routes";

const userRouter = express.Router();

const userIndexHandler = (req, res) => res.send("User index");
const userEditProfileHandler = (req, res) => res.send("User Edit");

userRouter.get("/", userIndexHandler);
userRouter.get(routes.userDetail, (req, res) => res.send("User Detail"));
userRouter.get(routes.editProfile, userEditProfileHandler);
userRouter.get(routes.changePassword, (req, res) =>
  res.send("User Change Password")
);

export default userRouter;
