import type { CollectionConfig } from "payload";

export const Bookmarks: CollectionConfig = {
  slug: "bookmarks",
  admin: {
    useAsTitle: "title"
  },
  timestamps: true,
  fields: [
    {
      name: "title",
      type: "text",
      required: true
    },
    {
      name: "url",
      type: "text",
      required: true
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "categories",
      required: false
    },
    {
      name: "tags",
      type: "array",
      fields: [{ name: "tag", type: "text" }]
    },
    {
      name: "userId", // Clerk user ID
      type: "text",
      required: true,
      admin: { hidden: true }
    }
  ]
};
