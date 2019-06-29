import { Category} from "./categories";
import { Market } from "./markets";

export class CategoryMarketDetail extends Category {
    categoryName: string
    markets: Market[]
    constructor(categoryData: any, marketData: any) {
        super(categoryData);
        this.categoryName = categoryData.categoryName;
        this.markets = marketData.map((item: any) => new Market(item));
    }
}

