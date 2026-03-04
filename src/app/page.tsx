import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function HomePage() {
  const posts = getAllPosts();

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">

      <div className="mb-20 pb-16" style={{ borderBottom: '1px solid rgba(240,168,50,0.12)' }}>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-8">
          <span className="font-mono text-[0.6rem] tracking-[0.35em] uppercase" style={{ color: 'var(--color-accent)' }}>
            DE HIMANSHU SURI
          </span>
          <span style={{ color: 'var(--color-dim)' }} className="font-mono text-[0.6rem]">·</span>
          <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase" style={{ color: 'var(--color-dim)' }}>
            MK97FK · 144.390 MHz · APRS
          </span>
        </div>

        <h1 className="font-display font-extrabold text-5xl tracking-tight mb-5 leading-[1.08]"
          style={{ color: 'var(--color-bright)' }}>
          Writing about the<br />
          <span style={{ color: 'var(--color-accent)' }}>invisible spectrum</span>
        </h1>

        <p className="text-base max-w-lg leading-relaxed mb-8" style={{ color: 'var(--color-dim)' }}>
          Deep learning, SDR, and signal processing — from raw IQ samples
          to trained models. Field notes from the shack.
        </p>

        <div className="inline-grid grid-cols-4 gap-px"
          style={{
            border: '1px solid rgba(240,168,50,0.2)',
            outline: '1px solid rgba(240,168,50,0.06)',
            outlineOffset: '3px',
          }}>
          {[
            { label: 'RST',  value: '599' },
            { label: 'MODE', value: 'FT8' },
            { label: 'PWR',  value: '100W' },
            { label: 'GRID', value: 'MK97FK' },
          ].map(({ label, value }) => (
            <div key={label}
              className="flex flex-col items-center px-4 py-2"
              style={{ background: 'rgba(240,168,50,0.04)', borderRight: '1px solid rgba(240,168,50,0.1)' }}>
              <span className="font-mono text-[0.5rem] tracking-[0.25em] uppercase mb-1"
                style={{ color: 'var(--color-dim)' }}>{label}</span>
              <span className="font-mono text-[0.8rem] font-bold"
                style={{ color: 'var(--color-accent)' }}>{value}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center gap-4 mb-8">
        <span className="font-mono text-[0.6rem] tracking-[0.3em] uppercase"
          style={{ color: 'var(--color-dim)' }}>
          // log entries
        </span>
        <div className="flex-1 h-px" style={{ background: 'rgba(107,95,122,0.25)' }} />
        <span className="font-mono text-[0.55rem] tracking-widest"
          style={{ color: 'var(--color-dim)' }}>
          CONFIRMING QSO
        </span>
      </div>

      {posts.length === 0 ? (
        <p className="font-mono text-sm" style={{ color: 'var(--color-dim)' }}>— no entries in log —</p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2">
          {posts.map((post, i) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group block relative transition-all duration-300 hover:-translate-y-1"
              style={{
              
                transform: `rotate(${i % 2 === 0 ? '-0.4deg' : '0.4deg'})`,
              }}
            >
              <div style={{
                background: 'linear-gradient(160deg, #f5ead0 0%, #ede0c0 100%)',
                border: '1px solid #c8b48a',
                outline: '2px solid rgba(200,180,138,0.3)',
                outlineOffset: '2px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.5), 0 1px 0 rgba(255,255,255,0.1) inset',
                borderRadius: '2px',
              }}>

           
                <div style={{
                  background: '#1a1208',
                  borderBottom: '2px solid #f0a832',
                  padding: '8px 14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    letterSpacing: '0.3em',
                    textTransform: 'uppercase',
                    color: '#f0a832',
                    fontWeight: 700,
                  }}>
                    QSL · BUREAU
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    letterSpacing: '0.2em',
                    color: 'rgba(240,168,50,0.5)',
                  }}>
                    CONFIRMING QSO
                  </span>
                </div>

                <div style={{ padding: '14px 14px 10px' }}>

                  <h2 style={{
                    fontFamily: 'var(--font-mono)',
                    fontWeight: 800,
                    fontSize: '0.95rem',
                    color: '#1a1208',
                    lineHeight: 1.35,
                    marginBottom: '8px',
                    letterSpacing: '-0.01em',
                  }}
                    className="group-hover:opacity-70 transition-opacity duration-200">
                    {post.title}
                  </h2>

                  <p style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    color: '#5a4a30',
                    lineHeight: 1.6,
                    marginBottom: '12px',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {post.description}
                  </p>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr 1fr',
                    gap: '0',
                    borderTop: '1px dashed #c8b48a',
                    borderLeft: '1px dashed #c8b48a',
                    marginBottom: '10px',
                  }}>
                    {[
                      { label: 'DATE', value: post.date },
                      { label: 'RST',  value: '599' },
                      { label: 'MODE', value: post.tags?.[0]?.toUpperCase() ?? 'CW' },
                    ].map(({ label, value }) => (
                      <div key={label} style={{
                        borderRight: '1px dashed #c8b48a',
                        borderBottom: '1px dashed #c8b48a',
                        padding: '4px 6px',
                      }}>
                        <div style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.45rem',
                          letterSpacing: '0.2em',
                          color: '#9a8060',
                          marginBottom: '2px',
                          textTransform: 'uppercase',
                        }}>{label}</div>
                        <div style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.62rem',
                          color: '#2a1a08',
                          fontWeight: 700,
                          letterSpacing: '0.05em',
                        }}>{value}</div>
                      </div>
                    ))}
                  </div>

                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {post.tags.map((tag) => (
                        <span key={tag} style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.5rem',
                          letterSpacing: '0.15em',
                          textTransform: 'uppercase',
                          padding: '2px 6px',
                          background: 'rgba(26,16,48,0.08)',
                          border: '1px solid rgba(198,120,221,0.3)',
                          color: '#7a4a8a',
                          borderRadius: '1px',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
                <div style={{
                  borderTop: '1px dashed #c8b48a',
                  padding: '5px 14px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.5rem',
                    color: '#9a8060',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                  }}>
                    TNX · 73
                  </span>
                  <span style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.5rem',
                    color: '#c8b48a',
                    letterSpacing: '0.1em',
                  }}>
                    DE HIMANSHU SURI
                  </span>
                </div>

              </div>

              <div style={{
                position: 'absolute',
                inset: 0,
                borderRadius: '2px',
                boxShadow: '4px 4px 0px rgba(0,0,0,0.4)',
                zIndex: -1,
                transform: 'translate(2px, 2px)',
              }} />
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}