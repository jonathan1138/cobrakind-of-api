export class CategoryFilters {
    readonly categoryName: string
    constructor(data: any) {
        this.categoryName = data.categoryName;
    }
}