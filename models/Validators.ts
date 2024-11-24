export type ValidationResult = {
    isValid: boolean;
    errors?: string[];
  };
  
  export type Validator<T> = {
    validate: (data: T) => ValidationResult;
  };
  
  // Приклад: Валідатор для статей
  import { Article } from './ContentTypes';
  
  export const ArticleValidator: Validator<Article> = {
    validate: (data: Article) => {
      const errors: string[] = [];
      if (!data.title) errors.push('Title is required.');
      if (!data.content) errors.push('Content is required.');
      return { isValid: errors.length === 0, errors };
    },
  };
  