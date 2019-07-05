import { pgp } from "../../db/db";

export class CategoryFilters {
    readonly categoryName: string
    constructor(data: any) {
        this.categoryName = data.categoryName;
    }

    getCondition() {
        const filterCondition = [
            this.categoryName ? "category_name = ${categoryName}": "true"
        ].join(" AND ");
        return pgp.as.format(filterCondition, this);
    }
}