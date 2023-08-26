import mongoose from "mongoose";
import PollTypes from "../interfaces/poll.interface";

const answerSchema = new mongoose.Schema({
  firstAnswer: {
    type: String,
    trim: true,
    required: true,
    max: 255,
  },
  secondAnwer: {
    type: String,
    trim: true,
    required: true,
    max: 255,
  },
  thirdAnswer: {
    type: String,
    trim: true,
    required: true,
    max: 255,
  },
  fourthAnwer: {
    type: String,
    trim: true,
    required: true,
    max: 255,
  },
});

const schema = new mongoose.Schema<PollTypes>(
  {
    photo: {
      type: String,
      trim: true,
      max: 255,
      required: true,
    },
    question: {
      type: String,
      trim: true,
      max: 255,
      required: true,
      unique: true,
    },
    options: [answerSchema],
    correctAnswer: {
      type: String,
      trim: true,
      required: true,
      max: 255,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const pollModel = mongoose.model("Poll", schema);
export default pollModel;
