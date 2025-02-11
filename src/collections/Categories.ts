import type { CollectionConfig } from "payload";

export const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "name"
  },
  timestamps: true,
  fields: [
    {
      name: "name",
      type: "text",
      required: true
    },
    {
      name: "userId", // Clerk user ID
      type: "text",
      required: true,
      admin: { hidden: true }
    }
  ]
};
