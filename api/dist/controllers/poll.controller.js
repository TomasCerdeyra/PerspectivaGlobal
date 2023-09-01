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
exports.getItemMostSearched = exports.calculateTotal = exports.postItems = exports.getItemById = exports.getItems = void 0;
const poll_services_1 = __importDefault(require("../services/poll.services"));
const getItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const getAllItems = yield poll_services_1.default.getAllPolls();
        if (getAllItems === "POLLS_UNEXISTENT")
            return res.status(404).json({ message: "Polls doesn't exists already", _status: res.statusCode });
        return res.json({ polls: getAllItems, _status: res.statusCode });
    }
    catch (error) {
        return res.status(500).json({ error: error.message, _status: res.statusCode });
    }
});
exports.getItems = getItems;
const getItemById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const uniquePoll = yield poll_services_1.default.getPollById(id);
        if (uniquePoll === null)
            return res.status(404).json({ message: `Poll with ID ${id} not found`, _status: res.statusCode });
        return res.json({ poll: uniquePoll, _status: res.statusCode });
    }
    catch (error) {
        // if (error.kind === 'ObjectId') return res.status(404).json({ message: `Poll with ID ${id} not found`, _status: res.statusCode });       
        return res.status(500).json({ error: error.message, _status: res.statusCode });
    }
});
exports.getItemById = getItemById;
const postItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const postItem = yield poll_services_1.default.postPoll(req.body);
        if (postItem === "EMPTY_FIELDS")
            return res.status(400).json({ message: "Fields cannot be empty", _status: res.statusCode });
        return res.status(201).json({ newPoll: postItem, _status: res.statusCode });
    }
    catch (error) {
        return res.status(500).json({ error: "Poll already exists", question: error.keyValue.question, _status: res.statusCode });
    }
});
exports.postItems = postItems;
const calculateTotal = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id, option } = req.params;
    try {
        const response = yield poll_services_1.default.calculateTotalClicks(id, option);
        if (response === "OPTION_NOT_FOUND")
            return res.status(404).json({ message: "Option not found", _status: res.statusCode });
        return res.json({ response, _status: res.statusCode });
    }
    catch (error) {
        return res.status(500).json({ error: error.message, _status: res.statusCode });
    }
});
exports.calculateTotal = calculateTotal;
const getItemMostSearched = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const pollSearched = yield poll_services_1.default.getMostSearchedPoll();
        if (pollSearched === null)
            return res.status(404).json({ message: "Poll not found", _status: res.statusCode });
        return res.json({ pollMostSearched: pollSearched });
    }
    catch (error) {
        return res.status(500).json({ error: error.message, _status: res.statusCode });
    }
});
exports.getItemMostSearched = getItemMostSearched;
