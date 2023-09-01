"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const answerSchema = new mongoose_1.default.Schema({
    firstAnswer: {
        type: String,
        trim: true,
        required: true,
        max: 255,
    },
    secondAnswer: {
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
    fourthAnswer: {
        type: String,
        trim: true,
        required: true,
        max: 255,
    },
});
const schema = new mongoose_1.default.Schema({
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
    options: {
        type: [String],
        trim: true,
        max: 255,
        required: true
    },
    category: {
        type: String,
        trim: true,
        max: 255,
        required: true
    },
    clicks: {
        type: [Number],
        required: true,
        default: []
    },
    totalResponses: {
        type: Number,
        trim: true,
        required: true,
        default: 0
    }
}, {
    timestamps: true,
    versionKey: false,
});
const pollModel = mongoose_1.default.model("Poll", schema);
exports.default = pollModel;
