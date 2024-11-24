import { BaseContent } from './BaseContent';

export interface Article extends BaseContent {
  title: string;
  content: string;
  author: string;
}

export interface Product extends BaseContent {
  name: string;
  price: number;
  description: string;
  stock: number;
}

// Generic тип для операцій із контентом
export type ContentOperations<T extends BaseContent> = {
  create: (data: T) => T;
  read: (id: string) => T | null;
  update: (id: string, data: Partial<T>) => T;
  delete: (id: string) => boolean;
};
