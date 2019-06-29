"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const categories_json_1 = __importDefault(require("./categories.json"));
const markets_json_1 = __importDefault(require("./markets.json"));
class DataStore {
}
DataStore.categories = categories_json_1.default;
DataStore.markets = markets_json_1.default;
exports.DataStore = DataStore;
