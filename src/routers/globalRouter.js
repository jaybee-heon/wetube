import express from "express";

const globalRouter = express.Router();

const globalHomeHandler = (req, res) => res.send("Home");

globalRouter.get("/", globalHomeHandler);

export default globalRouter;
