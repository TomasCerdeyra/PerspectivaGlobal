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
        const { photo, question, options, totalResponses } = body;
        
        await this.collection.create(body);

        if ([photo, question, options].includes("")) return "EMPTY_FIELDS";

        const finalResponse = {
            photo, 
            question, 
            options,
            totalResponses: 0
        }

        return finalResponse;
    }

    // ! ARREGLAR PARA MAÑANA LO ANTES POSIBLE EEH
    public calculateTotal = async (answer: string) => {
        const polls = await this.collection.find().select("-createdAt -updatedAt");
        let click: string | undefined = "";
        
        polls.map(poll => {
            console.log(poll);
            click = poll.options.find(option => option === answer)
        })
        console.log(click)
        // await this.collection.updateOne({})
        // console.log(polls.entries().next().value[1].options[0].firstAnswer)
        // console.log(polls.entries().next().value[1].options[0].secondAnswer)
        // console.log(polls.entries().next().value[1].options[0].thirdAnswer)
        // console.log(polls.entries().next().value[1].options[0].fourthAnswer)
        // polls.map(poll => {
        //     poll.options.map(option => console.log(option.match(answer)))
        // })
        
    }
}

const poll = new Poll();
export default poll;