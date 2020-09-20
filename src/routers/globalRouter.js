import express from "express";

export const globalRouter = express.Router();

const globalHomeHandler = (req, res) => res.send("Home");

globalRouter.get("/", globalHomeHandler);
