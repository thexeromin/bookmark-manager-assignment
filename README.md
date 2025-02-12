# Bookmark Manager

A web application for managing bookmarks with categorization and filtering. Built using Next.js 15, Payload CMS, and Clerk authentication.

## Tech Stack
- Frontend: Next.js 15, Tailwind CSS, React Table, Shadcn
- Backend: Payload CMS
- Database: MongoDB
- Authentication: Clerk
- Deployment: Vercel

## Implementation Details
- Used Client-side fetching in Next.js 15 for better interactivity instead of server actions.
- Implemented React Data Table for efficient filtering and search.
- Followed Atomic Design principles for modular and scalable UI components.

## Getting Started

First, set up your environment variables. Create a `.env` file in the root directory and add the required keys:

```bash
# Example .env file
PAYLOAD_SECRET=
DATABASE_URI=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
