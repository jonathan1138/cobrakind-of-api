import { pgp } from "../../db/db";

export class CategoryFilters {
    readonly cName: string
    readonly cImg: string
    constructor(data: any) {
        this.cName = data.cName;
        this.cImg = data.cImg;
    }

    getCondition() {
        const filterCondition = [
            this.cName ? "category_name = ${cName}": "true",
            this.cImg ? "category_image = ${cImg}": "true"
        ].join(" AND ");
        return pgp.as.format(filterCondition, this);
    }
}