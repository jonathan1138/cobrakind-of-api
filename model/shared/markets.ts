export class Market {
    categoryID: number
    marketName: string
    marketImg: string
    constructor(data: any) {
        this.categoryID = data.categoryID;
        this.marketName = data.marketName;
        this.marketImg = data.marketImg;
    }
}

