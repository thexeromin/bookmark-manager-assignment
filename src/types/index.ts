export interface Category {
  id: string;
  name: string;
  userId: string;
  createdAt: string;
  updatedAt: string;
}

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  tags: string[];
  category: string;
}
