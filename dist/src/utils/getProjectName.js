"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
async function getProjectName() {
    const project = await fs_1.promises.readFile('./package.json', 'utf8');
    console.log(JSON.parse(project));
}
exports.default = getProjectName;
//# sourceMappingURL=getProjectName.js.map