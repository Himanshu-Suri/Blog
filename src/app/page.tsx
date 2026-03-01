import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
    
      <div className="mb-20 border-b border-[rgba(0,229,255,0.1)] pb-16">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-accent2 block mb-4">
          // Himanshu Suri 
        </span>
        <h1 className="font-display font-extrabold text-bright text-5xl tracking-tight mb-4">
          Writing about the<br />
          <span className="text-accent">invisible spectrum</span>
        </h1>
        <p className="text-dim text-lg max-w-xl">
          Deep learning, software-defined radio, and signal processing — from raw IQ samples to trained models.
        </p>
      </div>

      <div className="mb-6">
        <span className="font-mono text-xs tracking-[0.3em] uppercase text-dim">
          // posts
        </span>
      </div>

      {posts.length === 0 ? (
        <p className="text-dim font-mono text-sm">No posts yet.</p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block border border-[rgba(0,229,255,0.08)] bg-surface p-6 rounded-sm hover:border-accent hover:-translate-y-0.5 transition-all duration-200"
            >
              <time className="font-mono text-[0.65rem] text-dim block mb-3 tracking-widest">
                {post.date}
              </time>
              <h2 className="font-display font-bold text-bright text-lg mb-2 group-hover:text-accent transition-colors duration-200 leading-snug">
                {post.title}
              </h2>
              <p className="text-sm text-[#b8cfd8] line-clamp-2 mb-4">
                {post.description}
              </p>
              {post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[0.6rem] tracking-wider px-2 py-0.5 bg-[rgba(0,229,255,0.07)] border border-[rgba(0,229,255,0.2)] text-accent rounded-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}