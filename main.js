"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Validators_1 = require("./models/Validators");
const Versioning_1 = require("./models/Versioning");
// Приклад використання статті
const article = {
    id: '1',
    createdAt: new Date(),
    updatedAt: new Date(),
    status: 'draft',
    title: 'My First Article',
    content: 'This is the content of the article.',
    author: 'John Doe',
};
const articleOperations = {
    create: (data) => (Object.assign({}, data)),
    read: (id) => (id === '1' ? article : null),
    update: (id, data) => id === '1' ? Object.assign(Object.assign(Object.assign({}, article), data), { updatedAt: new Date() }) : article,
    delete: (id) => id === '1',
};
const validationResult = Validators_1.ArticleValidator.validate(article);
console.log('Validation Result:', validationResult);
const versionedArticle = Object.assign(Object.assign({}, article), { version: 1, history: [] });
const newVersion = (0, Versioning_1.addVersion)(versionedArticle);
console.log('New Version:', newVersion);
