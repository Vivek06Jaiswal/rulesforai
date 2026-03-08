import Link from 'next/link';
import { PRESETS, IDE_OPTIONS } from '@/data/presets';

export function generateStaticParams() {
    return IDE_OPTIONS.map((ide) => ({ ide: ide.id }));
}

export async function generateMetadata({ params }) {
    const { ide } = await params;
    const ideMeta = IDE_OPTIONS.find((i) => i.id === ide);

    if (!ideMeta) {
        return { title: 'IDE Not Found | RulesForAI' };
    }

    return {
        title: `Best ${ideMeta.name} AI Coding Rules for Every Framework`,
        description: `Browse and download ${ideMeta.file} files for 20+ frameworks. Free ${ideMeta.name} rules generator for Next.js, React, Python, Go, and more.`,
        keywords: [
            `${ideMeta.name.toLowerCase()} rules`,
            `${ideMeta.file}`,
            `${ideMeta.name.toLowerCase()} coding rules generator`,
            `best ${ideMeta.name.toLowerCase()} rules`,
        ],
    };
}

export default async function IDEPage({ params }) {
    const { ide } = await params;
    const ideMeta = IDE_OPTIONS.find((i) => i.id === ide);

    if (!ideMeta) {
        return (
            <div className="container" style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
                <h1>IDE Not Found</h1>
                <Link href="/presets/" className="btn btn-primary">← Back to Presets</Link>
            </div>
        );
    }

    return (
        <div className="container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-4xl)' }}>
            {/* Breadcrumb */}
            <nav style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
                {' → '}
                <Link href="/presets/" style={{ color: 'var(--text-secondary)' }}>Presets</Link>
                {' → '}
                <span style={{ color: 'var(--text-heading)' }}>{ideMeta.name}</span>
            </nav>

            <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
                <span style={{ fontSize: '3rem' }}>{ideMeta.icon}</span>
                <h1 className="section-title">
                    {ideMeta.name} <span className="text-gradient">Rules</span>
                </h1>
                <p className="section-subtitle">
                    Download <code style={{ background: 'var(--bg-card)', padding: '2px 8px', borderRadius: '4px' }}>{ideMeta.file}</code> files
                    optimized for every framework. Click any preset below.
                </p>
            </div>

            <div className="preset-grid">
                {PRESETS.map((preset) => (
                    <Link
                        href={`/rules/${ide}/${preset.id}/`}
                        key={preset.id}
                        className="card preset-card"
                        style={{ textDecoration: 'none' }}
                    >
                        <div className="preset-icon">{preset.icon}</div>
                        <h3>{preset.name}</h3>
                        <p>{preset.description}</p>
                        <div className="preset-tags">
                            {preset.tags.slice(0, 3).map((tag) => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>

            {/* SEO Content */}
            <section className="section" style={{ marginTop: 'var(--space-4xl)' }}>
                <h2 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--text-heading)', marginBottom: 'var(--space-lg)' }}>
                    What is {ideMeta.file}?
                </h2>
                <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '800px' }}>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        The <strong>{ideMeta.file}</strong> file is a configuration file for <strong>{ideMeta.name}</strong> that tells the AI assistant
                        about your project&apos;s coding conventions, tech stack, and best practices. When placed in your project&apos;s root directory,
                        {ideMeta.name} automatically reads these rules and generates code that matches your standards.
                    </p>
                    <p>
                        RulesForAI provides optimized, pre-made <code>{ideMeta.file}</code> files for {PRESETS.length}+ popular frameworks.
                        Select a framework above to view and download the rules instantly.
                    </p>
                </div>
            </section>

            {/* Browse other IDEs */}
            <section style={{ marginTop: 'var(--space-2xl)' }}>
                <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--text-heading)', marginBottom: 'var(--space-lg)' }}>
                    Rules for Other AI IDEs
                </h2>
                <div className="preset-grid">
                    {IDE_OPTIONS.filter((i) => i.id !== ide).slice(0, 5).map((otherIde) => (
                        <Link href={`/rules/${otherIde.id}/`} key={otherIde.id} className="card preset-card" style={{ textDecoration: 'none' }}>
                            <div className="preset-icon">{otherIde.icon}</div>
                            <h3>{otherIde.name}</h3>
                            <p>Browse {otherIde.file} presets</p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
