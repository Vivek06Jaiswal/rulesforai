import Link from 'next/link';
import { PRESETS, IDE_OPTIONS } from '@/data/presets';
import AdSlot from '@/components/AdSlot';

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero-badge">⚡ Free &amp; open — no login required</div>
          <h1>
            Generate Perfect <span className="text-gradient">AI Coding Rules</span> in Seconds
          </h1>
          <p>
            One tool for all your AI IDEs. Create .cursorrules, .windsurfrules, CLAUDE.md,
            copilot-instructions.md files — instantly, for any framework.
          </p>
          <div className="hero-actions">
            <Link href="/generator/" className="btn btn-primary btn-lg">
              🚀 Open Generator
            </Link>
            <Link href="/presets/" className="btn btn-secondary btn-lg">
              📦 Browse Presets
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container">
        <div className="stats-row">
          <div className="stat-item">
            <div className="stat-number text-gradient">{IDE_OPTIONS.length}</div>
            <div className="stat-label">AI IDEs Supported</div>
          </div>
          <div className="stat-item">
            <div className="stat-number text-gradient">{PRESETS.length}+</div>
            <div className="stat-label">Framework Presets</div>
          </div>
          <div className="stat-item">
            <div className="stat-number text-gradient">10</div>
            <div className="stat-label">Customizable Options</div>
          </div>
          <div className="stat-item">
            <div className="stat-number text-gradient">0</div>
            <div className="stat-label">Login Required</div>
          </div>
        </div>
      </section>

      <AdSlot label="Advertisement" />

      {/* Supported IDEs */}
      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            One Generator, <span className="text-gradient">Every AI IDE</span>
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            Generate rules files for all major AI coding assistants from a single tool
          </p>
          <div className="features-grid">
            {IDE_OPTIONS.map((ide) => (
              <Link
                href={`/generator/?ide=${ide.id}`}
                className="card feature-card"
                key={ide.id}
                style={{ textDecoration: 'none', cursor: 'pointer' }}
              >
                <div className="feature-icon">{ide.icon}</div>
                <h3>{ide.name}</h3>
                <p>
                  Generate <code>{ide.file}</code> files instantly with framework-specific presets.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Why <span className="text-gradient">RulesForAI</span>?
          </h2>
          <p className="section-subtitle" style={{ textAlign: 'center' }}>
            No login. No paywall. Just click and generate.
          </p>
          <div className="features-grid">
            <div className="card feature-card">
              <div className="feature-icon">⚡</div>
              <h3>One-Click Presets</h3>
              <p>
                Select your stack — Next.js, Python, Go, Rust — and get a production-ready rules file instantly. No manual writing.
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🔄</div>
              <h3>Universal Format</h3>
              <p>
                Generate for Cursor, Windsurf, Claude Code, GitHub Copilot, and Cline — all from the same input.
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🎛️</div>
              <h3>Fine-Tune Controls</h3>
              <p>
                Toggle strict TypeScript, no-any rules, early returns, immutability, and more. Customize it to your style.
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">📋</div>
              <h3>Copy &amp; Download</h3>
              <p>
                Copy to clipboard or download the file directly. Ready to drop into your project root.
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🔒</div>
              <h3>100% Free &amp; Private</h3>
              <p>
                No account needed. No data collected. Everything runs in your browser. Completely free, forever.
              </p>
            </div>
            <div className="card feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Open Source Presets</h3>
              <p>
                Community-driven presets based on real-world best practices from professional development teams.
              </p>
            </div>
          </div>
        </div>
      </section>

      <AdSlot label="Advertisement" />

      {/* Popular Presets */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">
            Popular <span className="text-gradient">Presets</span>
          </h2>
          <p className="section-subtitle">One-click rules files for the most popular frameworks</p>
          <div className="preset-grid">
            {PRESETS.slice(0, 6).map((preset) => (
              <Link
                href={`/presets/${preset.id}/`}
                key={preset.id}
                className="card preset-card"
                style={{ textDecoration: 'none' }}
              >
                <div className="preset-icon">{preset.icon}</div>
                <h3>{preset.name}</h3>
                <p>{preset.description}</p>
                <div className="preset-tags">
                  {preset.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 'var(--space-xl)' }}>
            <Link href="/presets/" className="btn btn-secondary btn-lg">
              View All Presets →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="section-title">
            Ready to <span className="text-gradient">Supercharge</span> Your AI Coding?
          </h2>
          <p className="section-subtitle">
            Generate your first rules file in under 30 seconds. Free, forever.
          </p>
          <Link href="/generator/" className="btn btn-primary btn-lg">
            🚀 Open Generator — It&apos;s Free
          </Link>
        </div>
      </section>
    </>
  );
}
