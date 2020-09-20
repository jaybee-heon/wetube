import express from "express";

const videoRouter = express.Router();

const videoIndexHandler = (req, res) => res.send("Video Index");

videoRouter.get("/", videoIndexHandler);

export default videoRouter;
