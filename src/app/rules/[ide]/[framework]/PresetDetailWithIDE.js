'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PRESETS, IDE_OPTIONS, generateRules, TOGGLE_OPTIONS } from '@/data/presets';
import AdSlot from '@/components/AdSlot';

export default function PresetDetailWithIDE({ ideId, presetId }) {
    const preset = PRESETS.find((p) => p.id === presetId);
    const [selectedIDE, setSelectedIDE] = useState(ideId || 'cursor');
    const [copied, setCopied] = useState(false);

    const toggles = {};
    TOGGLE_OPTIONS.forEach((t) => {
        toggles[t.id] = t.default;
    });

    if (!preset) {
        return (
            <div className="container" style={{ padding: 'var(--space-4xl) 0', textAlign: 'center' }}>
                <h1>Preset Not Found</h1>
                <p>The preset you&apos;re looking for doesn&apos;t exist.</p>
                <Link href="/presets/" className="btn btn-primary" style={{ marginTop: 'var(--space-lg)' }}>
                    ← Back to Presets
                </Link>
            </div>
        );
    }

    const generated = generateRules(preset, selectedIDE, toggles);
    const currentIDE = IDE_OPTIONS.find((i) => i.id === selectedIDE);

    const handleCopy = () => {
        navigator.clipboard.writeText(generated.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const handleDownload = () => {
        const blob = new Blob([generated.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = generated.filename.replace(/\//g, '-');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-4xl)' }}>
            {/* Breadcrumb */}
            <nav style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)', marginBottom: 'var(--space-lg)' }}>
                <Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link>
                {' → '}
                <Link href="/presets/" style={{ color: 'var(--text-secondary)' }}>Presets</Link>
                {' → '}
                <Link href={`/rules/${selectedIDE}/`} style={{ color: 'var(--text-secondary)' }}>{currentIDE?.name}</Link>
                {' → '}
                <span style={{ color: 'var(--text-heading)' }}>{preset.name}</span>
            </nav>

            <div style={{ marginBottom: 'var(--space-xl)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-md)', marginBottom: 'var(--space-md)' }}>
                    <span style={{ fontSize: '2.5rem' }}>{preset.icon}</span>
                    <div>
                        <h1 className="section-title" style={{ marginBottom: 0 }}>
                            {currentIDE?.name} Rules for <span className="text-gradient">{preset.name}</span>
                        </h1>
                        <p style={{ color: 'var(--text-secondary)', marginTop: 'var(--space-xs)' }}>
                            {preset.description}
                        </p>
                    </div>
                </div>
                <div className="preset-tags">
                    {preset.tags.map((tag) => (
                        <span className="tag" key={tag}>{tag}</span>
                    ))}
                </div>
            </div>

            <AdSlot label="Advertisement" />

            <div style={{ marginBottom: 'var(--space-lg)' }}>
                <label style={{ display: 'block', fontWeight: 600, marginBottom: 'var(--space-sm)', color: 'var(--text-heading)' }}>
                    Select format:
                </label>
                <div className="ide-selector" style={{ maxWidth: '100%', flexWrap: 'wrap' }}>
                    {IDE_OPTIONS.map((ide) => (
                        <Link
                            key={ide.id}
                            href={`/rules/${ide.id}/${preset.id}/`}
                            className={`ide-btn ${selectedIDE === ide.id ? 'selected' : ''}`}
                            onClick={(e) => { e.preventDefault(); setSelectedIDE(ide.id); }}
                            style={{ textDecoration: 'none' }}
                        >
                            <span className="ide-icon">{ide.icon}</span>
                            {ide.name}
                        </Link>
                    ))}
                </div>
            </div>

            <div className="preview-panel">
                <div className="preview-header">
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                        {generated.filename}
                    </span>
                    <div className="preview-actions">
                        <button className="btn btn-secondary" onClick={handleCopy} type="button">
                            {copied ? '✅ Copied!' : '📋 Copy'}
                        </button>
                        <button className="btn btn-primary" onClick={handleDownload} type="button">
                            ⬇️ Download
                        </button>
                    </div>
                </div>
                <div className="preview-code">
                    <pre>{generated.content}</pre>
                </div>
            </div>

            <AdSlot label="Advertisement" />

            {/* SEO Content Section */}
            <section className="section">
                <h2 style={{ fontSize: 'var(--font-size-2xl)', color: 'var(--text-heading)', marginBottom: 'var(--space-lg)' }}>
                    About {currentIDE?.name} Rules for {preset.name}
                </h2>
                <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '800px' }}>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        The <strong>{generated.filename}</strong> file helps {currentIDE?.name} understand your {preset.name} project&apos;s conventions,
                        tech stack, and coding standards. This ensures the AI generates code that matches your team&apos;s style and follows
                        best practices for <strong>{preset.framework}</strong>.
                    </p>
                    <p style={{ marginBottom: 'var(--space-md)' }}>
                        This preset includes rules for:
                    </p>
                    <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
                        {preset.rules.conventions.slice(0, 5).map((c, i) => (
                            <li key={i} style={{ marginBottom: 'var(--space-sm)' }}>{c}</li>
                        ))}
                    </ul>
                    <h3 style={{ color: 'var(--text-heading)', marginBottom: 'var(--space-sm)', marginTop: 'var(--space-xl)' }}>
                        How to use this file
                    </h3>
                    <ol style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
                        <li style={{ marginBottom: 'var(--space-sm)' }}>Click <strong>Copy</strong> or <strong>Download</strong> above.</li>
                        <li style={{ marginBottom: 'var(--space-sm)' }}>Place the <code>{generated.filename}</code> file in your project&apos;s root directory.</li>
                        <li style={{ marginBottom: 'var(--space-sm)' }}>{currentIDE?.name} will automatically detect and apply these rules.</li>
                    </ol>
                </div>
            </section>

            {/* Cross-links to other IDEs for this framework */}
            <section>
                <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--text-heading)', marginBottom: 'var(--space-lg)' }}>
                    Get {preset.name} Rules for Other IDEs
                </h2>
                <div className="preset-grid">
                    {IDE_OPTIONS.filter((i) => i.id !== selectedIDE).slice(0, 5).map((ide) => (
                        <Link href={`/rules/${ide.id}/${preset.id}/`} key={ide.id} className="card preset-card" style={{ textDecoration: 'none' }}>
                            <div className="preset-icon">{ide.icon}</div>
                            <h3>{ide.name}</h3>
                            <p>{preset.name} rules for {ide.name}</p>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Cross-links to other frameworks for this IDE */}
            <section style={{ marginTop: 'var(--space-2xl)' }}>
                <h2 style={{ fontSize: 'var(--font-size-xl)', color: 'var(--text-heading)', marginBottom: 'var(--space-lg)' }}>
                    Other {currentIDE?.name} Presets
                </h2>
                <div className="preset-grid">
                    {PRESETS.filter((p) => p.id !== preset.id).slice(0, 4).map((p) => (
                        <Link href={`/rules/${selectedIDE}/${p.id}/`} key={p.id} className="card preset-card" style={{ textDecoration: 'none' }}>
                            <div className="preset-icon">{p.icon}</div>
                            <h3>{p.name}</h3>
                            <p>{p.description}</p>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
