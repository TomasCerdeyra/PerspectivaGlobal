"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const poll_model_1 = __importDefault(require("../models/poll.model"));
class Poll {
    constructor() {
        this._getUniquePoll = (id) => __awaiter(this, void 0, void 0, function* () {
            const getPoll = yield this.collection.findOne({ _id: id });
            return getPoll;
        });
        this._getAllPolls = () => __awaiter(this, void 0, void 0, function* () {
            const polls = yield this.collection.find();
            return polls;
        });
        this._getMax = (responses) => {
            let getMostClicked = 0;
            for (let i = 0; i < responses.length; i++) {
                getMostClicked = Math.max(getMostClicked, responses[i]);
            }
            return getMostClicked;
        };
        this.getAllPolls = () => __awaiter(this, void 0, void 0, function* () {
            const getPolls = yield this.collection.find().select('-createdAt -updatedAt');
            if (getPolls.length === 0)
                return "POLLS_UNEXISTENT";
            return getPolls;
        });
        this.getPollById = (id) => __awaiter(this, void 0, void 0, function* () {
            const getPoll = yield this.collection.findById({ _id: id }).select('-createdAt -updatedAt');
            return getPoll;
        });
        this.postPoll = (body) => __awaiter(this, void 0, void 0, function* () {
            const { photo, question, options, category } = body;
            yield this.collection.create(body);
            if ([photo, question, options, category].includes(""))
                return "EMPTY_FIELDS";
            const finalResponse = {
                photo,
                question,
                options,
                category,
                clicks: [],
                totalResponses: 0,
            };
            return finalResponse;
        });
        this.calculateTotalClicks = (id, option) => __awaiter(this, void 0, void 0, function* () {
            const poll = yield this._getUniquePoll(id);
            const options = poll === null || poll === void 0 ? void 0 : poll.options;
            if (options) {
                // Get user response click
                const click = options.map((optionMap) => optionMap === option);
                // Get index click user response
                const clickIndex = click.indexOf(true);
                if (clickIndex !== -1) {
                    yield this.collection.updateOne({ _id: id }, { $inc: { totalResponses: 1 }, $push: { clicks: clickIndex } }, { new: true });
                    return {
                        clickFor: poll.question,
                        options,
                        optionClicked: options[clickIndex],
                    };
                }
                else
                    return "OPTION_NOT_FOUND";
            }
            else
                return "OPTION_NOT_FOUND";
        });
        this.getMostSearchedPoll = () => __awaiter(this, void 0, void 0, function* () {
            const getPolls = yield this._getAllPolls();
            const totalResponses = getPolls.map(poll => poll.totalResponses);
            const responses = this._getMax(totalResponses);
            const mostSearchedPoll = yield this.collection.findOne({ totalResponses: responses }).select('-createdAt -updatedAt');
            return mostSearchedPoll;
        });
        this.collection = poll_model_1.default;
    }
}
const poll = new Poll();
exports.default = poll;
