export class Category {
    id: string
    categoryName: string
    categoryImg: string
    constructor(data: any) {
        this.id = data.id;
        this.categoryName = data.categoryName;
        this.categoryImg = data.categoryImg;
    }
}