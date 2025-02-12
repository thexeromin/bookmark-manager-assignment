"use client";

import { ColumnDef } from "@tanstack/react-table";

export type Bookmark = {
  id: string;
  title: string;
  url: string;
  category?: string;
  userId: string;
};

export const columns: ColumnDef<Bookmark>[] = [
  {
    accessorKey: "title",
    header: "Label"
  },
  {
    accessorKey: "url",
    header: "URL"
  },
  {
    accessorKey: "category",
    header: "Category"
  }
];
