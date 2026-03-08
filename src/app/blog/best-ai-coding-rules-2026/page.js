import Link from 'next/link';
import AdSlot from '@/components/AdSlot';
import { IDE_OPTIONS } from '@/data/presets';

export const metadata = {
    title: 'Best AI Coding Rules for Every IDE in 2026 — Comparison & Setup',
    description: 'Compare .cursorrules vs .windsurfrules vs CLAUDE.md vs copilot-instructions.md. Complete comparison of all 15 AI IDE rules files with setup guides.',
    keywords: ['cursor vs windsurf rules', 'best AI coding rules', 'cursorrules vs windsurfrules', 'AI IDE comparison 2026', 'claude.md vs cursorrules'],
};

const COMPARISONS = [
    { category: 'Most Popular (by users)', winner: 'GitHub Copilot', file: '.github/copilot-instructions.md', reason: '20M+ developers use Copilot, making it the largest user base.' },
    { category: 'Best AI-First Editor', winner: 'Cursor', file: '.cursorrules', reason: 'Purpose-built for AI coding with codebase-wide context and multi-file editing.' },
    { category: 'Best Open Source', winner: 'Cline', file: '.clinerules', reason: 'Fully open-source with 1.2M MAU, uses MCP for extensibility.' },
    { category: 'Best for Enterprise', winner: 'Amazon Q Developer', file: '.amazonq/rules', reason: 'Deep AWS integration and built-in security scanning.' },
    { category: 'Best Terminal Tool', winner: 'Claude Code', file: 'CLAUDE.md', reason: 'Terminal-native with massive context windows and agentic workflows.' },
    { category: 'Fastest Editor', winner: 'Zed AI', file: '.zed/rules', reason: 'Written in Rust for maximum performance, supports local models.' },
    { category: 'Best No-Code Builder', winner: 'Bolt.new', file: 'bolt.instructions.md', reason: 'Build full apps from natural language, no IDE needed.' },
    { category: 'Best JetBrains Integration', winner: 'JetBrains AI', file: 'guidelines.md', reason: 'Native integration across IntelliJ, PyCharm, WebStorm.' },
];

export default function BestAICodingRulesPost() {
    return (
        <article className="container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-4xl)', maxWidth: '800px' }}>
            <Link href="/blog/" style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                ← Back to Blog
            </Link>

            <header style={{ marginTop: 'var(--space-lg)', marginBottom: 'var(--space-2xl)' }}>
                <div className="preset-tags" style={{ marginBottom: 'var(--space-md)' }}>
                    <span className="tag">Comparison</span>
                    <span className="tag">2026</span>
                </div>
                <h1 style={{ fontSize: 'var(--font-size-4xl)', color: 'var(--text-heading)', lineHeight: 1.2, marginBottom: 'var(--space-md)' }}>
                    Best AI Coding Rules for Every IDE in <span className="text-gradient">2026</span>
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
                    March 6, 2026 · 10 min read
                </p>
            </header>

            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: 'var(--font-size-lg)' }}>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    With <strong>{IDE_OPTIONS.length} AI coding tools</strong> now supporting rules files, choosing the right setup can be overwhelming.
                    This guide compares all major AI IDEs, their rules file formats, and helps you pick the best one for your workflow.
                </p>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    Quick Comparison Table
                </h2>
                <div style={{ overflowX: 'auto', marginBottom: 'var(--space-xl)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-default)' }}>
                                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'left', color: 'var(--text-heading)' }}>AI IDE</th>
                                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'left', color: 'var(--text-heading)' }}>Rules File</th>
                                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'left', color: 'var(--text-heading)' }}>Format</th>
                                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'left', color: 'var(--text-heading)' }}>Best For</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                { name: 'Cursor', file: '.cursorrules', format: 'Markdown', best: 'AI-first development' },
                                { name: 'Windsurf', file: '.windsurfrules', format: 'MD + YAML', best: 'Agentic workflows' },
                                { name: 'Claude Code', file: 'CLAUDE.md', format: 'Markdown', best: 'Terminal power users' },
                                { name: 'GitHub Copilot', file: 'copilot-instructions.md', format: 'Markdown', best: 'VS Code users' },
                                { name: 'Cline', file: '.clinerules', format: 'Markdown', best: 'Open-source lovers' },
                                { name: 'Zed AI', file: '.zed/rules', format: 'Text', best: 'Performance-focused' },
                                { name: 'Aider', file: '.aider.conf.yml', format: 'YAML', best: 'Git-integrated workflows' },
                                { name: 'Continue.dev', file: '.continuerc.json', format: 'JSON', best: 'Custom model configs' },
                                { name: 'Devin AI', file: 'devin.md', format: 'Markdown', best: 'Autonomous coding' },
                                { name: 'Amazon Q', file: '.amazonq/rules', format: 'Markdown', best: 'AWS development' },
                                { name: 'Bolt.new', file: 'bolt.instructions.md', format: 'Markdown', best: 'Rapid prototyping' },
                                { name: 'Lovable', file: 'lovable.instructions.md', format: 'Markdown', best: 'Text-to-app' },
                                { name: 'Replit AI', file: '.replit/ai-rules', format: 'Text', best: 'Cloud development' },
                                { name: 'Augment Code', file: 'augment-guidelines.md', format: 'Markdown', best: 'Large codebases' },
                                { name: 'JetBrains AI', file: 'guidelines.md', format: 'Markdown', best: 'IntelliJ/PyCharm users' },
                            ].map((row) => (
                                <tr key={row.name} style={{ borderBottom: '1px solid var(--border-default)' }}>
                                    <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>{row.name}</td>
                                    <td style={{ padding: 'var(--space-sm) var(--space-md)' }}><code style={{ fontSize: 'var(--font-size-sm)' }}>{row.file}</code></td>
                                    <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>{row.format}</td>
                                    <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>{row.best}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <AdSlot label="Advertisement" />

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    🏆 Best in Category
                </h2>
                {COMPARISONS.map((comp) => (
                    <div key={comp.category} style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: 'var(--space-lg)', marginBottom: 'var(--space-md)', border: '1px solid var(--border-default)' }}>
                        <h3 style={{ color: 'var(--text-heading)', marginBottom: 'var(--space-xs)', fontSize: 'var(--font-size-lg)' }}>{comp.category}</h3>
                        <p style={{ marginBottom: 'var(--space-xs)' }}>
                            <strong style={{ color: 'var(--accent-primary-light)' }}>{comp.winner}</strong> — <code>{comp.file}</code>
                        </p>
                        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--text-muted)' }}>{comp.reason}</p>
                    </div>
                ))}

                <AdSlot label="Advertisement" />

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    .cursorrules vs .windsurfrules: Key Differences
                </h2>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    The two most compared formats are Cursor and Windsurf. Here&apos;s how they differ:
                </p>
                <div style={{ overflowX: 'auto', marginBottom: 'var(--space-xl)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-default)' }}>
                                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'left', color: 'var(--text-heading)' }}>Feature</th>
                                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'left', color: 'var(--text-heading)' }}>Cursor</th>
                                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'left', color: 'var(--text-heading)' }}>Windsurf</th>
                            </tr>
                        </thead>
                        <tbody>
                            {[
                                ['File name', '.cursorrules', '.windsurfrules'],
                                ['Format', 'Markdown', 'Markdown + YAML frontmatter'],
                                ['Trigger system', 'Always active', 'Supports trigger: always_on'],
                                ['Multi-file rules', '.cursor/rules/*.mdc', 'Single file'],
                                ['Context awareness', 'Full codebase', 'Full codebase (Cascade Flow)'],
                                ['Editor base', 'VS Code fork', 'VS Code fork'],
                            ].map((row) => (
                                <tr key={row[0]} style={{ borderBottom: '1px solid var(--border-default)' }}>
                                    <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>{row[0]}</td>
                                    <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>{row[1]}</td>
                                    <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>{row[2]}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    How to Choose the Right IDE
                </h2>
                <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-lg)' }}>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Already using VS Code?</strong> → Try <Link href="/rules/cursor/" style={{ color: 'var(--accent-primary-light)' }}>Cursor</Link> or <Link href="/rules/windsurf/" style={{ color: 'var(--accent-primary-light)' }}>Windsurf</Link></li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Using JetBrains?</strong> → <Link href="/rules/jetbrains/" style={{ color: 'var(--accent-primary-light)' }}>JetBrains AI</Link></li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Want terminal-native?</strong> → <Link href="/rules/claude/" style={{ color: 'var(--accent-primary-light)' }}>Claude Code</Link> or <Link href="/rules/aider/" style={{ color: 'var(--accent-primary-light)' }}>Aider</Link></li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Building apps without code?</strong> → <Link href="/rules/bolt/" style={{ color: 'var(--accent-primary-light)' }}>Bolt.new</Link> or <Link href="/rules/lovable/" style={{ color: 'var(--accent-primary-light)' }}>Lovable</Link></li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>On AWS?</strong> → <Link href="/rules/amazonq/" style={{ color: 'var(--accent-primary-light)' }}>Amazon Q Developer</Link></li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Want open-source?</strong> → <Link href="/rules/cline/" style={{ color: 'var(--accent-primary-light)' }}>Cline</Link> or <Link href="/rules/continue/" style={{ color: 'var(--accent-primary-light)' }}>Continue.dev</Link></li>
                </ul>

                <p style={{ marginBottom: 'var(--space-md)' }}>
                    For detailed setup instructions for each IDE, read our <Link href="/blog/ai-coding-rules-guide/" style={{ color: 'var(--accent-primary-light)' }}>complete setup guide</Link>.
                </p>

                <AdSlot label="Advertisement" />

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    Generate Rules for Any IDE
                </h2>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    Don&apos;t want to write rules manually? Our generator supports all {IDE_OPTIONS.length} IDEs and {20}+ frameworks:
                </p>
                <Link href="/generator/" className="btn btn-primary btn-lg">
                    🚀 Generate Rules Now — Free
                </Link>
            </div>
        </article>
    );
}
