import { RequestHandler } from "express";
import { CategoryFilters } from "../../../model/shared/categoryFilters";
import { APIError } from "../../../model/shared/sysMessages";

export const apiCheckCategoryFilters: RequestHandler = (req, res, next) => {
    const filters = new CategoryFilters(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(APIError.errInvalidQueryParameter({filter: filter}));
        }
    }
    next();
}

// import { dateParam } from "../general/requestParams/dateParams";
// Example of custom request parameter (from server.ts) filtering by defining params - not advised since req params should be entity only
// app.param("fromDate", dateParam);
// app.param("toDate", dateParam);
// app.get("/listings/:fromDate/:toDate", (req, res, next) => res.json(req.params));
