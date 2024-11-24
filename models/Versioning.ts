import { BaseContent } from './BaseContent';

export type Versioned<T extends BaseContent> = T & {
  version: number;
  history: Array<T>;
};

export const addVersion = <T extends BaseContent>(
  item: Versioned<T>
): Versioned<T> => {
  const newItem = { ...item, version: item.version + 1 };
  newItem.history.push(item);
  return newItem;
};
