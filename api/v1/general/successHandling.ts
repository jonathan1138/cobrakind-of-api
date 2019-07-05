import { CustomSuccessHandler } from "../../../model/express";

export const apiSuccessHandler: CustomSuccessHandler = (req, res, next) => {
    console.log(req.statusCode);
    next();
};

