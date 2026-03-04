import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode from "rehype-pretty-code";
import Link from "next/link";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const { frontmatter, content } = getPostBySlug(slug);

  return (
    <div className="max-w-2xl mx-auto px-6 py-16">

      <Link
        href="/"
        className="font-mono text-xs tracking-[0.2em] uppercase text-dim hover:text-accent transition-colors duration-200 mb-12 block"
      >
        ← back
      </Link>

      <header className="mb-12 pb-10" style={{ borderBottom: '1px solid rgba(240,168,50,0.1)' }}>
        <time className="font-mono text-[0.6rem] tracking-widest uppercase text-dim block mb-4">
          {frontmatter.date}
        </time>
        <h1 className="font-display font-extrabold text-bright text-3xl leading-tight tracking-tight mb-4">
          {frontmatter.title}
        </h1>
        {frontmatter.description && (
          <p className="text-base leading-relaxed mb-5" style={{ color: '#c9bfda' }}>
            {frontmatter.description}
          </p>
        )}
        {frontmatter.tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {frontmatter.tags.map((tag) => (
              <span
                key={tag}
                className="font-mono text-[0.55rem] tracking-wider px-2 py-0.5 rounded-sm"
                style={{
                  background: 'rgba(240,168,50,0.07)',
                  border: '1px solid rgba(240,168,50,0.2)',
                  color: 'var(--color-accent)',
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose prose-invert max-w-none
        prose-headings:font-mono prose-headings:font-bold prose-headings:tracking-tight
        prose-h2:text-bright prose-h2:text-xl prose-h2:mt-12 prose-h2:mb-4
        prose-h3:text-accent prose-h3:text-base prose-h3:mt-8 prose-h3:mb-3
        prose-p:leading-relaxed prose-p:font-mono prose-p:text-[#c9bfda]
        prose-a:text-accent prose-a:no-underline hover:prose-a:underline
        prose-strong:text-bright
        prose-code:text-accent prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-sm prose-code:text-[0.83em] prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-surface prose-pre:border prose-pre:border-l-4
        prose-blockquote:text-dim prose-blockquote:not-italic
        prose-li:text-[#c9bfda]
        prose-th:font-mono prose-th:text-[0.65rem] prose-th:tracking-widest prose-th:uppercase prose-th:text-dim
        prose-td:text-[#c9bfda]
      "
        style={{
          '--tw-prose-hr': 'rgba(240,168,50,0.1)',
          '--tw-prose-quote-borders': 'var(--color-accent)',
          '--tw-prose-pre-bg': 'var(--color-surface)',
          '--tw-prose-th-borders': 'rgba(240,168,50,0.15)',
          '--tw-prose-td-borders': 'rgba(240,168,50,0.08)',
        } as React.CSSProperties}
      >
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [[rehypePrettyCode, { theme: "github-dark" }]],
              format: 'md',
            },
          }}
        />
      </article>

      <div className="mt-16 pt-8" style={{ borderTop: '1px solid rgba(240,168,50,0.1)' }}>
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-mono text-xs tracking-[0.2em] uppercase text-dim hover:text-accent transition-colors duration-200"
          >
             all posts
          </Link>
          <span className="font-mono text-[0.55rem] tracking-widest text-dim">
            73 · MK97FK
          </span>
        </div>
      </div>

    </div>
  );
}