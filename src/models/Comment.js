import mongoose, { mongo } from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "Text is required"
  },
  createdAt: {
    type: Date,
    default: Date.now
    // Date.now : 함수 자체를 저장. 생성 시점의 시간이 기록됨 <-> Date.now() : 함수 실행 결과가 저장
  },
  video: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Video"
  }
});

const model = mongoose.model("Comment", CommentSchema);
export default model;
