import { Request, Response } from "express";
import poll from "../services/poll.services";

export const getItems = async (req: Request, res: Response): Promise<any> => {
    try {
        const getAllItems = await poll.getAllPolls();

        if (getAllItems === "POLLS_UNEXISTENT") return res.status(404).json({ message: "Polls doesn't exists already", _status: res.statusCode });

        return res.json({ polls: getAllItems, _status: res.statusCode });
    } catch (error: any) {
        return res.status(500).json({ error: error.message, _status: res.statusCode });
    }
}

export const postItems = async (req: Request, res: Response) => {
    try {
        const postItem = await poll.postPoll(req.body);

        if (postItem === "EMPTY_FIELDS") return res.status(400).json({ message: "Fields cannot be empty", _status: res.statusCode });
        
        return res.status(201).json({ newPoll: postItem, _status: res.statusCode });
    } catch (error: any) {        
        return res.status(500).json({ error: "Poll already exists", question: error.keyValue.question, _status: res.statusCode });
    }
}

export const calculateTotal = async (req: Request, res: Response) => {
    const { id, option } = req.params;
    try {
        const response = await poll.calculateTotalClicks(id, option);
        
        if (response === "OPTION_NOT_FOUND") return res.status(404).json({ message: "Option not found", _status: res.statusCode }) 

        return res.json({ response, _status: res.statusCode });
    } catch (error: any) {
        return res.status(500).json({ error: error.message, _status: res.statusCode })
    }
}

export const getItemMostSearched = async (req: Request, res: Response) => {
    try {
        const pollSearched = await poll.getMostSearchedPoll();
        
    } catch (error: any) {
        return res.status(500).json({ error: error.message, _status: res.statusCode });
    }
}