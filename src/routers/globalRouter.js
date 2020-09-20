import express from "express";
import routes from "../routes";

const globalRouter = express.Router();

const globalHomeHandler = (req, res) => res.send("Home");

globalRouter.get(routes.home, globalHomeHandler);
globalRouter.get(routes.join, (req, res) => res.send("Home Join"));
globalRouter.get(routes.login, (req, res) => res.send("Home Login"));
globalRouter.get(routes.logout, (req, res) => res.send("Home Logout"));
globalRouter.get(routes.search, (req, res) => res.send("Home Search"));

export default globalRouter;
