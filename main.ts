import { Article, ContentOperations } from './models/ContentTypes';
import { ArticleValidator } from './models/Validators';
import { Versioned, addVersion } from './models/Versioning';

// Приклад використання статті
const article: Article = {
  id: '1',
  createdAt: new Date(),
  updatedAt: new Date(),
  status: 'draft',
  title: 'My First Article',
  content: 'This is the content of the article.',
  author: 'John Doe',
};

const articleOperations: ContentOperations<Article> = {
  create: (data) => ({ ...data }),
  read: (id) => (id === '1' ? article : null),
  update: (id, data) =>
    id === '1' ? { ...article, ...data, updatedAt: new Date() } : article,
  delete: (id) => id === '1',
};

const validationResult = ArticleValidator.validate(article);
console.log('Validation Result:', validationResult);

const versionedArticle: Versioned<Article> = {
  ...article,
  version: 1,
  history: [],
};

const newVersion = addVersion(versionedArticle);
console.log('New Version:', newVersion);
