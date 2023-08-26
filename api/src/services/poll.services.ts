import { Model } from "mongoose";
import PollTypes from "../interfaces/poll.interface";
import pollModel from "../models/poll.model";

class Poll {
    collection: Model<PollTypes>
    constructor() {
        this.collection = pollModel;
    }

    public getAllPolls = async (): Promise<string | Array<PollTypes>> => {
        const getPolls = await this.collection.find();

        if (getPolls.length === 0) return "POLLS_UNEXISTENT";

        return getPolls;
    }
}