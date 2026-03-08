import Link from 'next/link';
import AdSlot from '@/components/AdSlot';
import { IDE_OPTIONS } from '@/data/presets';

export const metadata = {
    title: 'About RulesForAI — Free AI Coding Rules Generator for 15 IDEs',
    description: 'RulesForAI is a free, universal AI coding rules file generator. Create perfect config files for Cursor, Windsurf, Claude Code, GitHub Copilot, Cline, and 10 more AI IDEs.',
};

export default function AboutPage() {
    return (
        <div className="container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-4xl)', maxWidth: '800px' }}>
            <h1 className="section-title">
                About <span className="text-gradient">RulesForAI</span>
            </h1>

            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8, fontSize: 'var(--font-size-lg)' }}>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    RulesForAI is a free, open tool that helps developers generate AI coding rules files for <strong>all {IDE_OPTIONS.length} major
                        AI code editors</strong> — including Cursor, Windsurf, Claude Code, GitHub Copilot, Cline, Zed AI, Aider,
                    Continue.dev, Devin AI, Amazon Q, Bolt.new, Lovable, Replit AI, Augment Code, and JetBrains AI.
                </p>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    Why We Built This
                </h2>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    AI coding assistants are transforming how developers write code. But they work best when they understand
                    your project&apos;s conventions, tech stack, and coding standards. That&apos;s what rules files do — they give
                    your AI assistant context about how you want your code written.
                </p>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    The problem? Writing these rules files manually is tedious. Different AI editors use different formats —
                    <code>.cursorrules</code>, <code>.windsurfrules</code>, <code>CLAUDE.md</code>, <code>copilot-instructions.md</code>,
                    and many more. And most developers end up copy-pasting generic templates that don&apos;t match their actual stack.
                </p>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    RulesForAI solves this by letting you generate a customized rules file in seconds — tailored to your exact
                    framework, language, and coding preferences. One tool for all your AI IDEs.
                </p>

                <AdSlot label="Advertisement" />

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    Features
                </h2>
                <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-lg)' }}>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>✅ Supports <strong>{IDE_OPTIONS.length} AI IDEs</strong>: Cursor, Windsurf, Claude Code, GitHub Copilot, Cline, Zed AI, Aider, Continue.dev, Devin AI, Amazon Q, Bolt.new, Lovable, Replit AI, Augment Code, and JetBrains AI</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>✅ <strong>20+ framework presets</strong>: Next.js, React, Python, Go, Rust, Vue, Angular, Laravel, Rails, Flutter, and more</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>✅ 10 customizable coding style options</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>✅ One-click copy and download</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>✅ 100% free, no login required</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>✅ Everything runs in your browser — nothing stored on servers</li>
                </ul>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    Supported AI IDEs
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
                    {IDE_OPTIONS.map((ide) => (
                        <Link
                            href={`/rules/${ide.id}/`}
                            key={ide.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 'var(--space-sm)',
                                padding: 'var(--space-sm) var(--space-md)',
                                background: 'var(--bg-card)',
                                borderRadius: '8px',
                                border: '1px solid var(--border-default)',
                                textDecoration: 'none',
                                color: 'var(--text-secondary)',
                                fontSize: 'var(--font-size-sm)',
                                transition: 'border-color 0.2s',
                            }}
                        >
                            <span style={{ fontSize: '1.2em' }}>{ide.icon}</span>
                            <span>{ide.name}</span>
                        </Link>
                    ))}
                </div>

                <AdSlot label="Advertisement" />

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    Contact
                </h2>
                <p>
                    Have a suggestion, bug report, or want to contribute a preset?
                    Reach out at <a href="mailto:calcsav@gmail.com">calcsav@gmail.com</a>.
                </p>
            </div>
        </div>
    );
}
