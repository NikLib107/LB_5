"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addVersion = void 0;
const addVersion = (item) => {
    const newItem = Object.assign(Object.assign({}, item), { version: item.version + 1 });
    newItem.history.push(item);
    return newItem;
};
exports.addVersion = addVersion;
