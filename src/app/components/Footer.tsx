export default function Footer() {
  return (
    <footer className="border-t border-[rgba(0,229,255,0.08)] py-8 px-6 mt-auto">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        
        <span className="font-mono text-xs text-dim tracking-widest uppercase">
          Himanshu Suri  
        </span>

        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/himanshu-suri-16b9a41a3/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-dim tracking-widest uppercase hover:text-accent transition-colors duration-200"
          >
            linkedin 
          </a>
          <a
            href="https://github.com/Himanshu-Suri"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs text-dim tracking-widest uppercase hover:text-accent transition-colors duration-200"
          >
            github 
          </a>
        </div>

      </div>
    </footer>
  );
}