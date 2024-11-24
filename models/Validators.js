"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArticleValidator = void 0;
exports.ArticleValidator = {
    validate: (data) => {
        const errors = [];
        if (!data.title)
            errors.push('Title is required.');
        if (!data.content)
            errors.push('Content is required.');
        return { isValid: errors.length === 0, errors };
    },
};
