import * as dbModel from "../../db/model_generated";
export class Market {
    marketID: string
    categoryID: string
    mName: string
    mImg: string[]
    constructor(data: dbModel.markets) {
        this.marketID = data.id;
        this.categoryID = data.category_id;
        this.mName = data.market_name;
        this.mImg = data.market_image || [];
    }
}

