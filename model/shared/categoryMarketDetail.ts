import { Category} from "./categories";
import { Market } from "./markets";

export class CategoryMarketDetail extends Category {
    categoryName: string
    categoryImg: string[]
    markets: Market[]
    constructor(categoryData: any, marketData: any, categoryImgs: string[]) {
        super(categoryData);
        this.categoryName = categoryData.categoryName;
        this.markets = marketData.map((item: any) => new Market(item));
        this.categoryImg = categoryImgs;
    }
}

