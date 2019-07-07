import jsonCategories from "./categories.json";
import jsonMarkets from "./markets.json";

interface UserAccount {
    email: string
    password: string
}

export class DataStore {
    static categories = jsonCategories;
    static markets = jsonMarkets;
    static UserAccounts: UserAccount[] = [];
}

