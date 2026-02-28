import fs from "fs";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content/posts");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  tags: string[];
};

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  return fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith(".mdx") || f.endsWith(".md"))
    .map((filename) => {
      const raw = fs.readFileSync(path.join(POSTS_DIR, filename), "utf8");
      const { data } = matter(raw);
      return {
        slug: filename.replace(/\.mdx?$/, ""),
        title:       data.title       ?? "Untitled",
        date:        data.date        ?? "",
        description: data.description ?? "",
        tags:        data.tags        ?? [] as string[],
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getPostBySlug(slug: string): { frontmatter: PostMeta; content: string } {
  const mdxPath  = path.join(POSTS_DIR, `${slug}.mdx`);
  const mdPath   = path.join(POSTS_DIR, `${slug}.md`);
  const filePath = fs.existsSync(mdxPath) ? mdxPath : mdPath;

  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  return {
    frontmatter: {
      slug,
      title:       data.title       ?? "Untitled",
      date:        data.date        ?? "",
      description: data.description ?? "",
      tags:        data.tags        ?? [] as string[],
    },
    content,
  };
}