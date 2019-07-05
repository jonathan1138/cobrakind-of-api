import * as dbModel from "../db/model_generated";

export interface categoriesWithMarkets extends dbModel.categories {
    markets: dbModel.markets[]
}