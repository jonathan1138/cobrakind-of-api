import { Category} from "./categories";
import { Market } from "./markets";

export class CategoryMarketDetail extends Category {
    categoryName: string
    categoryImage: string[]
    markets: Market[]
    constructor(categoryData: any, marketData: any, categoryImages: string[]) {
        super(categoryData);
        this.categoryName = categoryData.category_name;
        this.markets = marketData.map((item: any) => new Market(item));
        this.categoryImage = categoryImages;
    }
}

