export interface Category {
  id: string;
  name: string;
}

export interface Bookmark {
  id: string;
  title: string;
  url: string;
  tags: string[];
  category: string;
}
