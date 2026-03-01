import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b border-[rgba(0,229,255,0.08)] sticky top-0 z-50 bg-bg/80 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto px-6 h-14 flex items-center justify-between">
        
        <Link href="/" className="font-mono text-xs tracking-widest uppercase text-bright hover:text-accent transition-colors duration-200">
          Himanshu Suri
        </Link>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/himanshu-suri-16b9a41a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs tracking-widest uppercase text-dim hover:text-accent transition-colors duration-200"
          >
            contact 
          </a>
        </div>
      </div>
    </nav>
  );
}