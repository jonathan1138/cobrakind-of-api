import { Category} from "./categories";
import { Market } from "./markets";
import * as dbModelExt from "../../db/model_extensions";
export class CategoryMarketDetail extends Category {
    categoryName: string
    categoryImage: string[]
    markets: Market[]
    constructor(data: dbModelExt.categoriesWithMarkets, categoryImages: string[]) {
        super(data);
        this.categoryName = data.category_name;
        this.markets = data.markets.map((item: any) => new Market(item));
        this.categoryImage = categoryImages;
    }
}

