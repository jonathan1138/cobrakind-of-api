"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categoryFilters_1 = require("../../../model/shared/categoryFilters");
const sysMessages_1 = require("../../../model/shared/sysMessages");
exports.apiCheckCategoryFilters = (req, res, next) => {
    const filters = new categoryFilters_1.CategoryFilters(req.query);
    for (let filter of Object.getOwnPropertyNames(req.query)) {
        if (!filters.hasOwnProperty(filter)) {
            next(sysMessages_1.APIError.errInvalidQueryParameter({ filter: filter }));
        }
    }
    next();
};
// import { dateParam } from "../general/requestParams/dateParams";
// Example of custom request parameter (from server.ts) filtering by defining params - not advised since req params should be entity only
// app.param("fromDate", dateParam);
// app.param("toDate", dateParam);
// app.get("/listings/:fromDate/:toDate", (req, res, next) => res.json(req.params));
