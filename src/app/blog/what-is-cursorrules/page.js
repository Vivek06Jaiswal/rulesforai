import Link from 'next/link';
import AdSlot from '@/components/AdSlot';

export const metadata = {
    title: 'What is a .cursorrules File? Complete Guide for 2026',
    description: 'Learn what .cursorrules files are, why they matter, and how to create one that makes Cursor AI write better code for your projects. Includes examples and best practices.',
    keywords: ['cursorrules', 'what is cursorrules', 'cursor rules file', 'cursor AI rules', 'how to write cursor rules'],
};

export default function WhatIsCursorrulesPost() {
    return (
        <article className="container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-4xl)', maxWidth: '800px' }}>
            <Link href="/blog/" style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                ← Back to Blog
            </Link>

            <header style={{ marginTop: 'var(--space-lg)', marginBottom: 'var(--space-2xl)' }}>
                <div className="preset-tags" style={{ marginBottom: 'var(--space-md)' }}>
                    <span className="tag">Cursor</span>
                    <span className="tag">Guide</span>
                </div>
                <h1 style={{ fontSize: 'var(--font-size-4xl)', color: 'var(--text-heading)', lineHeight: 1.2, marginBottom: 'var(--space-md)' }}>
                    What is a <span className="text-gradient">.cursorrules</span> File? Complete Guide for 2026
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
                    March 3, 2026 · 8 min read
                </p>
            </header>

            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: 'var(--font-size-lg)' }}>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    If you use <strong>Cursor AI</strong> for coding, you&apos;ve probably noticed that it sometimes writes code
                    that doesn&apos;t match your project&apos;s conventions. It might use the wrong styling approach, import from
                    the wrong libraries, or structure components differently than you prefer. That&apos;s where <code>.cursorrules</code> files come in.
                </p>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    What is a .cursorrules File?
                </h2>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    A <code>.cursorrules</code> file is a plain text file placed in your project&apos;s root directory that tells
                    Cursor AI how you want it to write code. Think of it as a &quot;style guide&quot; for your AI coding assistant.
                </p>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    When Cursor detects a <code>.cursorrules</code> file in your project, it automatically reads it and follows
                    the instructions when generating code, making suggestions, or refactoring existing code.
                </p>

                <AdSlot label="Advertisement" />

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    Why Do You Need One?
                </h2>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    Without a rules file, Cursor uses its default behavior — which might not match what you want. Here&apos;s what a rules file helps with:
                </p>
                <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-lg)' }}>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Consistent code style</strong> — ensures the AI follows your team&apos;s conventions</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Framework-specific patterns</strong> — tells the AI which patterns to use (e.g., App Router vs Pages Router in Next.js)</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Library preferences</strong> — specifies which libraries to use and which to avoid</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Error handling standards</strong> — defines how errors should be handled across the project</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>TypeScript strictness</strong> — enforces strict typing rules</li>
                </ul>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    How to Create a .cursorrules File
                </h2>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    There are two ways to create a <code>.cursorrules</code> file:
                </p>

                <h3 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-xl)', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
                    Option 1: Use Our Free Generator (Recommended)
                </h3>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    The easiest way is to use the <Link href="/generator/" style={{ color: 'var(--accent-primary-light)' }}>RulesForAI Generator</Link>.
                    Select your framework, customize the options, and download a ready-to-use file in seconds.
                </p>

                <h3 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-xl)', marginTop: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
                    Option 2: Write It Manually
                </h3>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    Create a file named <code>.cursorrules</code> in your project&apos;s root directory. Write your rules in plain
                    text or Markdown format. For example:
                </p>

                <div className="preview-panel" style={{ marginBottom: 'var(--space-xl)' }}>
                    <div className="preview-header">
                        <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                            .cursorrules
                        </span>
                    </div>
                    <div className="preview-code">
                        <pre>{`# Role
You are an expert React developer using TypeScript.

# Tech Stack
- React 19
- TypeScript (strict mode)
- Tailwind CSS

# Conventions
- Use functional components with hooks
- Use TypeScript interfaces for all props
- Prefer const over let
- Use early returns to reduce nesting

# Avoid
- Do not use class components
- Do not use the any type
- Do not use inline styles`}</pre>
                    </div>
                </div>

                <AdSlot label="Advertisement" />

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    .cursorrules vs Other Formats
                </h2>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    Different AI coding tools use different rules file formats:
                </p>
                <div style={{ overflowX: 'auto', marginBottom: 'var(--space-xl)' }}>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid var(--border-default)' }}>
                                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'left', color: 'var(--text-heading)' }}>AI IDE</th>
                                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'left', color: 'var(--text-heading)' }}>File Name</th>
                                <th style={{ padding: 'var(--space-sm) var(--space-md)', textAlign: 'left', color: 'var(--text-heading)' }}>Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr style={{ borderBottom: '1px solid var(--border-default)' }}>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>Cursor</td>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}><code>.cursorrules</code></td>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>Project root</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-default)' }}>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>Windsurf</td>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}><code>.windsurfrules</code></td>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>Project root</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-default)' }}>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>Claude Code</td>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}><code>CLAUDE.md</code></td>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>Project root</td>
                            </tr>
                            <tr style={{ borderBottom: '1px solid var(--border-default)' }}>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>GitHub Copilot</td>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}><code>copilot-instructions.md</code></td>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}><code>.github/</code> directory</td>
                            </tr>
                            <tr>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>Cline</td>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}><code>.clinerules</code></td>
                                <td style={{ padding: 'var(--space-sm) var(--space-md)' }}>Project root</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    Our <Link href="/generator/" style={{ color: 'var(--accent-primary-light)' }}>universal generator</Link> supports
                    all five formats — generate once, export for any AI IDE.
                </p>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    Best Practices
                </h2>
                <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-lg)' }}>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Be specific</strong> — vague rules lead to vague code. Say &quot;Use TypeScript strict mode&quot; instead of &quot;Use TypeScript.&quot;</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Include your stack</strong> — list the exact libraries, frameworks, and versions you use.</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Say what to avoid</strong> — explicitly list anti-patterns and things you don&apos;t want.</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Keep it updated</strong> — update your rules file when your project&apos;s conventions change.</li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}><strong>Commit to version control</strong> — share rules with your team by committing the file to Git.</li>
                </ul>

                <AdSlot label="Advertisement" />

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    Get Started
                </h2>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    Ready to create your own <code>.cursorrules</code> file? Use our free generator to build one in seconds:
                </p>
                <Link href="/generator/" className="btn btn-primary btn-lg">
                    🚀 Generate Your .cursorrules File
                </Link>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    Guides for Other AI IDEs
                </h2>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    Not using Cursor? We have guides for all 15 AI coding tools:
                </p>
                <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-lg)' }}>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>
                        <Link href="/blog/ai-coding-rules-guide/" style={{ color: 'var(--accent-primary-light)' }}>Complete Guide to AI Rules Files for Every IDE</Link> — setup, format, and examples for all 15 IDEs
                    </li>
                    <li style={{ marginBottom: 'var(--space-sm)' }}>
                        <Link href="/blog/best-ai-coding-rules-2026/" style={{ color: 'var(--accent-primary-light)' }}>Best AI Coding Rules for Every IDE in 2026</Link> — comparison and recommendations
                    </li>
                </ul>
            </div>
        </article>
    );
}
