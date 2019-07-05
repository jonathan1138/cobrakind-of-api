import { DataStore } from "../../../data/data";
import { RequestHandler } from "express";
import { PublicError, PublicInfo, APIError } from "../../../model/shared/sysMessages";

export const datastoreDeleteCategory: RequestHandler = ( req, res, next ) => {
    const categoryID = req.params.id;
    const categoryIndex = DataStore.categories.findIndex((item: any) => item.id == categoryID);
    if (categoryIndex > -1) {
        DataStore.categories.splice(categoryIndex, 1);
        //res.json(new PublicInfo("Category Deleted", 204));
        res.status(204);
        res.json(PublicInfo.infoDeleted());
    }
    else {
      // res.json(PublicError());
        next(APIError.errNotFound());
    }
}