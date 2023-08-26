import { Request, Response } from "express";

export const getItems = (req: Request, res: Response) => {
    return res.json('hola')
}