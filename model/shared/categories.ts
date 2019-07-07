import * as dbModel from "../../db/model_generated";
export class Category {
    id: string
    cName: string
    cImg: string[]
    constructor(data: dbModel.categories) {
        this.id = data.id;
        this.cName = data.category_name || "";
        this.cImg = data.category_image || [];
    }
}