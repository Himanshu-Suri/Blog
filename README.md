# Signal Blog

A personal blog built with Next.js 16, Tailwind CSS v4, and MDX.

## Stack

- **Next.js 16** — App Router
- **Tailwind CSS v4** — styling
- **MDX** — blog posts written in markdown
- **next-mdx-remote** — MDX rendering
- **rehype-pretty-code** — syntax highlighting

## Running Locally
```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Writing Posts

Add a `.md` file to `content/posts/`:
```md
---
title: "Post Title"
date: "2025-02-28"
description: "Short description."
tags: ["tag1", "tag2"]
---

Your content here.
```

The filename becomes the URL — `my-post.md` → `/blog/my-post`

## Deploy

Deployed on Vercel. Every push to `main` triggers a redeploy.
