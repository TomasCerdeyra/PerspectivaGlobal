import { Model } from "mongoose";
import PollTypes from "../interfaces/poll.interface";
import pollModel from "../models/poll.model";

class Poll {
    collection: Model<PollTypes>
    constructor() {
        this.collection = pollModel;
    }

    private _getUniquePoll = async (question: string): Promise<PollTypes | null> => {
        const getPoll = await this.collection.findOne({ question });
        return getPoll;
    }

    public getAllPolls = async (): Promise<string | Array<PollTypes>> => {
        const getPolls = await this.collection.find();

        if (getPolls.length === 0) return "POLLS_UNEXISTENT";

        return getPolls;
    }

    public postPoll = async (body: PollTypes): Promise<string | PollTypes> => {
        const { photo, question, options, correctAnswer } = body;
        const postPoll = await this.collection.create(body);

        if ([photo, question, options, correctAnswer].includes("")) return "EMPTY_FIELDS";
        
        return postPoll;
    }
}

const poll = new Poll();
export default poll;