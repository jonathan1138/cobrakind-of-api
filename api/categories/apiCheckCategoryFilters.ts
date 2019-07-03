import { RequestHandler } from "express";
import { CategoryFilters } from "../../model/shared/categoryFilters";
import { APIError } from "../../model/shared/sysMessages";

export const apiCheckCategoryFilters: RequestHandler = (req, res, next) => {
    const filters = new CategoryFilters(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            // next(APIError.errInvalidQueryParameter({filter: filter}));
            next(APIError.errInvalidQueryParameter({filter: filter}));
        }
    }

    
    next();
}