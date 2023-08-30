import { Model } from "mongoose";
import PollTypes from "../interfaces/poll.interface";
import pollModel from "../models/poll.model";

class Poll {
  collection: Model<PollTypes>;
  constructor() {
    this.collection = pollModel;
  }

  private _getUniquePoll = async (id: string): Promise<PollTypes | null> => {
    const getPoll = await this.collection.findOne({ _id: id });
    return getPoll;
  };

  private _getAllPolls = async (): Promise<Array<PollTypes>> => {
    const polls = await this.collection.find();
    return polls;
  }

  private static _getMax = (responses: Array<number>) => {
    
  }

  public getAllPolls = async (): Promise<string | Array<PollTypes>> => {
    const getPolls = await this.collection.find();

    if (getPolls.length === 0) return "POLLS_UNEXISTENT";

    return getPolls;
  };

  public postPoll = async (body: PollTypes): Promise<string | PollTypes> => {
    const { photo, question, options } = body;

    await this.collection.create(body);

    if ([photo, question, options].includes("")) return "EMPTY_FIELDS";

    const finalResponse = {
      photo,
      question,
      options,
      clicks: [],
      totalResponses: 0,
    };

    return finalResponse;
  };

  public calculateTotalClicks = async (id: string, option: string): Promise<Object | string> => {
    const poll = await this._getUniquePoll(id);
    const options = poll?.options;
    if (options) {
      // Get user response click
      const click = options.map((optionMap) => optionMap === option);
      // Get index click user response
      const clickIndex = click.indexOf(true);
      
      if (clickIndex !== -1) {
        await this.collection.updateOne(
          { _id: id },
          { $inc: { totalResponses: 1 }, $push: { clicks: clickIndex } },
          { new: true }
        );
        return {
          clickFor: poll.question,
          options,
          optionClicked: options[clickIndex],
        };
      } else return "OPTION_NOT_FOUND";
      
    } else return "OPTION_NOT_FOUND";
  };

  public getMostSearchedPoll = async () => {
    const getPolls = await this._getAllPolls();
    const totalResponses = getPolls.map(poll => poll.totalResponses);    
  }
}

const poll = new Poll();
export default poll;
