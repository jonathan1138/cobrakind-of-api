import * as dbModel from "../../db/model_generated";
export class Market {
    marketID: string
    categoryID: string
    marketName: string
    marketImage: string[]
    constructor(data: dbModel.markets) {
        this.marketID = data.id;
        this.categoryID = data.category_id;
        this.marketName = data.market_name;
        this.marketImage = data.market_image || [];
    }
}

