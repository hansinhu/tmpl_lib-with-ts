"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getProjectName_1 = __importDefault(require("./utils/getProjectName"));
function main(age) {
    console.log(age);
    (0, getProjectName_1.default)();
}
main(18);
//# sourceMappingURL=index.js.map