import { pgp } from "../../db/db";

export class CategoryFilters {
    readonly categoryName: string
    readonly categoryImage: string
    constructor(data: any) {
        this.categoryName = data.categoryName;
        this.categoryImage = data.categoryImage;
    }

    getCondition() {
        const filterCondition = [
            this.categoryName ? "category_name = ${categoryName}": "true",
            this.categoryImage ? "category_image = ${categoryImage}": "true"
        ].join(" AND ");
        return pgp.as.format(filterCondition, this);
    }
}