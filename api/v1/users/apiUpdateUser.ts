import { RequestHandler } from "express";

export const apiUpdateUser: RequestHandler = (req, res, next) => {
    res.send("Data update for User with Id " + req.params.id);
};