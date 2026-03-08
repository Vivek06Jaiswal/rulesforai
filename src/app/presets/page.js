import Link from 'next/link';
import { PRESETS, IDE_OPTIONS } from '@/data/presets';
import AdSlot from '@/components/AdSlot';

export const metadata = {
    title: 'AI Coding Rules Presets — Ready-Made Rules for Every Framework',
    description: 'Browse 10+ pre-made AI coding rules files for Next.js, React, Python, Go, Rust, Vue, and more. One-click download for Cursor, Windsurf, Claude, and Copilot.',
};

export default function PresetsPage() {
    return (
        <div className="container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-4xl)' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
                <h1 className="section-title">
                    Framework <span className="text-gradient">Presets</span>
                </h1>
                <p className="section-subtitle">
                    Ready-made AI coding rules for every popular framework. Click any preset to view, customize, and download.
                </p>
            </div>

            <AdSlot label="Advertisement" />

            <div className="preset-grid">
                {PRESETS.map((preset) => (
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

            <AdSlot label="Advertisement" />

            <section className="section">
                <div style={{ textAlign: 'center', marginBottom: 'var(--space-xl)' }}>
                    <h2 className="section-title">
                        Browse by <span className="text-gradient">AI IDE</span>
                    </h2>
                    <p className="section-subtitle">
                        Select your AI coding assistant to see framework-specific rules
                    </p>
                </div>
                <div className="preset-grid">
                    {IDE_OPTIONS.map((ide) => (
                        <Link
                            href={`/rules/${ide.id}/`}
                            key={ide.id}
                            className="card preset-card"
                            style={{ textDecoration: 'none' }}
                        >
                            <div className="preset-icon">{ide.icon}</div>
                            <h3>{ide.name}</h3>
                            <p><code style={{ fontSize: 'var(--font-size-sm)' }}>{ide.file}</code></p>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="section" style={{ textAlign: 'center' }}>
                <h2 className="section-title">
                    Need a <span className="text-gradient">Custom</span> Rules File?
                </h2>
                <p className="section-subtitle">
                    Use our generator to build a fully customized rules file with your exact preferences.
                </p>
                <Link href="/generator/" className="btn btn-primary btn-lg">
                    🚀 Open Generator
                </Link>
            </section>
        </div>
    );
}
