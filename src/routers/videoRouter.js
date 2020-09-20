import express from "express";
import routes from "../routes";

const videoRouter = express.Router();

const videoIndexHandler = (req, res) => res.send("Video Index");

videoRouter.get("/", videoIndexHandler);
videoRouter.get(routes.videoDetail, (req, res) => res.send("Video Detail"));
videoRouter.get(routes.upload, (req, res) => res.send("Video Upload"));
videoRouter.get(routes.editVideo, (req, res) => res.send("Video Edit"));
videoRouter.get(routes.deleteVideo, (req, res) => res.send("Video Delete"));

export default videoRouter;
