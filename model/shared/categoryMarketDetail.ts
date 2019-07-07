import { Category} from "./categories";
import { Market } from "./markets";
import * as dbModelExt from "../../db/model_extensions";
export class CategoryMarketDetail extends Category {
    cName: string
    cImg: string[]
    markets: Market[]
    constructor(data: dbModelExt.categoriesWithMarkets, cImgs: string[]) {
        super(data);
        this.cName = data.category_name;
        this.markets = data.markets.map((item: any) => new Market(item));
        this.cImg = cImgs;
    }
}

