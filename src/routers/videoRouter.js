import express from "express";
import routes from "../routes";
import {
  home,
  videoDetail,
  getUpload,
  postUpload,
  deleteVideo,
  getEditVideo,
  postEditVideo
} from "../controllers/videoController";
import { uploadVideo } from "../middlewares";

const videoRouter = express.Router();

videoRouter.get(routes.home, home);

// Upload
videoRouter.get(routes.upload, getUpload);
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Edit
videoRouter.get(routes.editVideo(), getEditVideo);
videoRouter.post(routes.editVideo(), postEditVideo);

// Delete
videoRouter.get(routes.deleteVideo(), deleteVideo);

// Detail
videoRouter.get(routes.videoDetail(), videoDetail);

export default videoRouter;
