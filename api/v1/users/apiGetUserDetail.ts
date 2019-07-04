import { RequestHandler } from "express";

export const apiGetUserDetail: RequestHandler = (req, res, next) => {
    res.send("Details for user with ID " + req.params.id);
};