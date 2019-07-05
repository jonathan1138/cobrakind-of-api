import * as dbModel from "../../db/model_generated";
export class Category {
    id: string
    categoryName: string
    categoryImage: string[]
    constructor(data: dbModel.categories) {
        this.id = data.id;
        this.categoryName = data.category_name || "";
        this.categoryImage = data.category_image || [];
    }
}