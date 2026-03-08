import Link from 'next/link';
import AdSlot from '@/components/AdSlot';
import { IDE_OPTIONS } from '@/data/presets';

export const metadata = {
    title: 'Complete Guide to AI Coding Rules Files for Every IDE (2026)',
    description: 'Learn about .windsurfrules, CLAUDE.md, copilot-instructions.md, .clinerules, and rules files for Zed, Aider, Devin, Bolt.new, and more. Free generator included.',
    keywords: ['windsurfrules', 'claude.md', 'copilot instructions', 'clinerules', 'AI coding rules', 'windsurf rules', 'cline rules file'],
};

const IDE_GUIDES = [
    {
        id: 'windsurf', name: 'Windsurf', file: '.windsurfrules', icon: '🏄',
        summary: 'Windsurf by Codeium is an AI-native code editor built on VS Code. It uses Cascade Flow for deep context awareness and supports agentic workflows.',
        setup: 'Create a `.windsurfrules` file in your project root. Windsurf automatically detects and applies the rules.',
        format: 'Markdown with YAML frontmatter. Use `---\\ntrigger: always_on\\n---` at the top for persistent rules.',
        example: `---\ntrigger: always_on\n---\n\n# Role\nYou are an expert React developer using TypeScript.\n\n# Conventions\n- Use functional components with hooks\n- Use TypeScript strict mode\n- Prefer const over let`,
    },
    {
        id: 'claude', name: 'Claude Code', file: 'CLAUDE.md', icon: '🤖',
        summary: 'Claude Code is Anthropic\'s terminal-native CLI for AI-assisted coding. It reads CLAUDE.md for project context and coding standards.',
        setup: 'Create a `CLAUDE.md` file in your project root. Claude Code reads it automatically when you run commands.',
        format: 'Standard Markdown. Use headers to organize sections like ## Tech Stack, ## Conventions, ## Avoid.',
        example: `# CLAUDE.md\n\n## About This Project\nYou are an expert Python developer using FastAPI.\n\n## Tech Stack\n- Python 3.12+\n- FastAPI\n- Pydantic v2\n\n## Conventions\n- Use type hints for all functions\n- Use async/await for I/O operations`,
    },
    {
        id: 'copilot', name: 'GitHub Copilot', file: '.github/copilot-instructions.md', icon: '🐙',
        summary: 'GitHub Copilot is the most widely used AI coding assistant with 20M+ users. It reads project-specific instructions from a markdown file.',
        setup: 'Create `.github/copilot-instructions.md` in your repository. Copilot reads this file for custom coding context.',
        format: 'Standard Markdown. Use clear headings and bullet points for conventions and preferences.',
        example: `# GitHub Copilot Instructions\n\n## Context\nYou are an expert Next.js developer.\n\n## Tech Stack\n- Next.js (App Router)\n- TypeScript\n- Tailwind CSS\n\n## Conventions\n- Use Server Components by default\n- Use TypeScript strict mode`,
    },
    {
        id: 'cline', name: 'Cline', file: '.clinerules', icon: '⚡',
        summary: 'Cline is an open-source autonomous coding agent for VS Code using the Model Context Protocol (MCP). It has 1.2M+ monthly active users.',
        setup: 'Create a `.clinerules` file in your project root. Cline picks it up automatically when working in the project.',
        format: 'Plain text or Markdown. Similar format to .cursorrules — just list your Role, Stack, Conventions, and Anti-patterns.',
        example: `# Role\nYou are an expert Go developer using Gin.\n\n# Tech Stack\n- Go 1.23+\n- Gin web framework\n- GORM\n\n# Conventions\n- Handle errors explicitly\n- Use interfaces for dependency injection\n- Write table-driven tests`,
    },
    {
        id: 'zed', name: 'Zed AI', file: '.zed/rules', icon: '⚙️',
        summary: 'Zed is a high-performance code editor written in Rust with native AI integration. It supports popular LLMs and local models via Ollama.',
        setup: 'Create a `.zed/rules` file in your project. Zed reads it to customize AI assistant behavior.',
        format: 'Plain text with clear sections for role, conventions, and preferences.',
        example: `# Role\nYou are an expert Rust developer using Actix Web.\n\n# Conventions\n- Use Result<T, E> for error handling\n- Never use unwrap() in production\n- Use async/await with Tokio`,
    },
    {
        id: 'aider', name: 'Aider', file: '.aider.conf.yml', icon: '🔧',
        summary: 'Aider is an open-source AI pair programming tool that works in the terminal. It supports multiple AI models and integrates with Git.',
        setup: 'Create a `.aider.conf.yml` in your project root or home directory for global settings.',
        format: 'YAML configuration with coding conventions. You can also use a conventions file referenced from the config.',
        example: `# .aider.conf.yml\nmodel: claude-3.5-sonnet\nauto-commits: true\n\n# Conventions\n# Use TypeScript strict mode\n# Prefer functional components\n# Always handle errors explicitly`,
    },
    {
        id: 'continue', name: 'Continue.dev', file: '.continuerc.json', icon: '▶️',
        summary: 'Continue is an open-source autopilot for VS Code and JetBrains that\'s highly configurable, supporting custom AI models and integrations.',
        setup: 'Create a `.continuerc.json` in your project root to configure Continue\'s behavior for the project.',
        format: 'JSON configuration with model settings and custom instructions.',
        example: `{\n  "models": [{"provider": "anthropic", "model": "claude-3.5-sonnet"}],\n  "customInstructions": "You are an expert Vue.js developer using Nuxt 3 and TypeScript."\n}`,
    },
    {
        id: 'devin', name: 'Devin AI', file: 'devin.md', icon: '🧠',
        summary: 'Devin by Cognition Labs is marketed as the first AI software engineer. It can autonomously plan, code, debug, and deploy applications.',
        setup: 'Create a `devin.md` file in your project root to guide Devin\'s understanding of your codebase.',
        format: 'Markdown with project context, architectural decisions, and coding standards.',
        example: `# Devin.md\n\n## Project Context\nThis is a Django REST API project.\n\n## Architecture\n- Follow MVT pattern\n- Use serializers for all API endpoints\n- Use class-based views for CRUD`,
    },
    {
        id: 'amazonq', name: 'Amazon Q Developer', file: '.amazonq/rules', icon: '📦',
        summary: 'Amazon Q Developer is AWS\'s AI coding assistant, optimized for cloud development with built-in security scanning.',
        setup: 'Create `.amazonq/rules` in your project to provide Amazon Q with project-specific context.',
        format: 'Markdown rules with conventions for AWS-specific patterns and general coding standards.',
        example: `# Role\nYou are an expert AWS developer using CDK and TypeScript.\n\n# Conventions\n- Use AWS CDK v2 for infrastructure\n- Use DynamoDB single-table design\n- Follow AWS Well-Architected Framework`,
    },
    {
        id: 'bolt', name: 'Bolt.new', file: 'bolt.instructions.md', icon: '⚡',
        summary: 'Bolt.new is an AI-powered web app builder that creates full-stack applications from natural language prompts in the browser.',
        setup: 'Add a `bolt.instructions.md` file to guide Bolt\'s code generation for your specific project standards.',
        format: 'Markdown with clear instructions about tech stack, design patterns, and code quality standards.',
        example: `# Bolt Instructions\n\n## Stack\n- React + Vite\n- Tailwind CSS\n- Supabase backend\n\n## Design\n- Use modern, dark theme\n- Mobile-first responsive design`,
    },
    {
        id: 'lovable', name: 'Lovable', file: 'lovable.instructions.md', icon: '💜',
        summary: 'Lovable is a text-to-app platform that generates React + Vite frontends with Supabase backends from natural language.',
        setup: 'Create `lovable.instructions.md` to customize Lovable\'s code generation for your project.',
        format: 'Markdown with architectural preferences and coding standards.',
        example: `# Lovable Instructions\n\n## Tech Stack\n- React + Vite\n- Supabase\n- Tailwind CSS\n\n## Conventions\n- Use TypeScript strict mode\n- Use React Query for data fetching`,
    },
    {
        id: 'replit', name: 'Replit AI', file: '.replit/ai-rules', icon: '🔄',
        summary: 'Replit is a cloud-based IDE with built-in AI features including code completion, explanation, and full-stack app generation.',
        setup: 'Create `.replit/ai-rules` in your project to customize Replit AI\'s behavior.',
        format: 'Plain text or Markdown with coding conventions and project context.',
        example: `# Role\nYou are building a Python Flask API.\n\n# Conventions\n- Use Flask blueprints for routes\n- Use SQLAlchemy for database access\n- Write tests with pytest`,
    },
    {
        id: 'augment', name: 'Augment Code', file: 'augment-guidelines.md', icon: '🚀',
        summary: 'Augment Code is an AI platform for professional engineers working with large, complex codebases. It understands entire repos.',
        setup: 'Create `augment-guidelines.md` in your project root with coding standards and architecture.',
        format: 'Markdown guidelines with sections for architecture, conventions, and patterns.',
        example: `# Augment Guidelines\n\n## Architecture\n- Microservices with gRPC\n- Event-driven with Kafka\n\n## Conventions\n- Use dependency injection\n- Follow clean architecture layers`,
    },
    {
        id: 'jetbrains', name: 'JetBrains AI', file: 'guidelines.md', icon: '🧩',
        summary: 'JetBrains AI Assistant integrates directly into IntelliJ, PyCharm, WebStorm, and other JetBrains IDEs with language-specific optimizations.',
        setup: 'Create `guidelines.md` in your project root. JetBrains AI uses it for context-aware suggestions.',
        format: 'Markdown with project context, tech stack, and coding conventions.',
        example: `# Guidelines\n\n## Project\nSpring Boot REST API with JPA.\n\n## Tech Stack\n- Java 21\n- Spring Boot 3\n- PostgreSQL\n\n## Conventions\n- Use constructor injection\n- Use DTOs for API responses`,
    },
];

export default function AllIDEGuidesPost() {
    return (
        <article className="container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-4xl)', maxWidth: '800px' }}>
            <Link href="/blog/" style={{ color: 'var(--text-secondary)', fontSize: 'var(--font-size-sm)' }}>
                ← Back to Blog
            </Link>

            <header style={{ marginTop: 'var(--space-lg)', marginBottom: 'var(--space-2xl)' }}>
                <div className="preset-tags" style={{ marginBottom: 'var(--space-md)' }}>
                    <span className="tag">All IDEs</span>
                    <span className="tag">Complete Guide</span>
                </div>
                <h1 style={{ fontSize: 'var(--font-size-4xl)', color: 'var(--text-heading)', lineHeight: 1.2, marginBottom: 'var(--space-md)' }}>
                    Complete Guide to <span className="text-gradient">AI Coding Rules Files</span> for Every IDE
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: 'var(--font-size-sm)' }}>
                    March 6, 2026 · 15 min read
                </p>
            </header>

            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.9, fontSize: 'var(--font-size-lg)' }}>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    AI coding assistants work best when they understand your project&apos;s conventions.
                    Every major AI IDE supports some form of <strong>rules file</strong> — a config file that tells the AI
                    about your tech stack, coding standards, and preferences. This guide covers <strong>all {IDE_OPTIONS.length} supported IDEs</strong>.
                </p>

                <div style={{ background: 'var(--bg-card)', borderRadius: '12px', padding: 'var(--space-lg)', marginBottom: 'var(--space-xl)', border: '1px solid var(--border-default)' }}>
                    <h3 style={{ color: 'var(--text-heading)', marginBottom: 'var(--space-md)' }}>📑 Quick Reference</h3>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                            <thead>
                                <tr style={{ borderBottom: '1px solid var(--border-default)' }}>
                                    <th style={{ padding: 'var(--space-xs) var(--space-sm)', textAlign: 'left', color: 'var(--text-heading)', fontSize: 'var(--font-size-sm)' }}>IDE</th>
                                    <th style={{ padding: 'var(--space-xs) var(--space-sm)', textAlign: 'left', color: 'var(--text-heading)', fontSize: 'var(--font-size-sm)' }}>Rules File</th>
                                </tr>
                            </thead>
                            <tbody>
                                {IDE_OPTIONS.map((ide) => (
                                    <tr key={ide.id} style={{ borderBottom: '1px solid var(--border-default)' }}>
                                        <td style={{ padding: 'var(--space-xs) var(--space-sm)', fontSize: 'var(--font-size-sm)' }}>{ide.icon} {ide.name}</td>
                                        <td style={{ padding: 'var(--space-xs) var(--space-sm)', fontSize: 'var(--font-size-sm)' }}><code>{ide.file}</code></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    Already know which IDE you need? <Link href="/generator/" style={{ color: 'var(--accent-primary-light)' }}>Skip to our generator</Link> to
                    create your rules file in seconds. Or read on for detailed setup guides for each IDE.
                </p>

                <AdSlot label="Advertisement" />

                {IDE_GUIDES.map((guide, idx) => (
                    <section key={guide.id} id={guide.id}>
                        <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                            {guide.icon} {guide.name} — <code>{guide.file}</code>
                        </h2>
                        <p style={{ marginBottom: 'var(--space-md)' }}>{guide.summary}</p>

                        <h3 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-sm)' }}>Setup</h3>
                        <p style={{ marginBottom: 'var(--space-md)' }}>{guide.setup}</p>

                        <h3 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-lg)', marginBottom: 'var(--space-sm)' }}>Format</h3>
                        <p style={{ marginBottom: 'var(--space-md)' }}>{guide.format}</p>

                        <div className="preview-panel" style={{ marginBottom: 'var(--space-lg)' }}>
                            <div className="preview-header">
                                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--font-size-sm)', color: 'var(--text-secondary)' }}>
                                    {guide.file}
                                </span>
                            </div>
                            <div className="preview-code">
                                <pre>{guide.example}</pre>
                            </div>
                        </div>

                        <p style={{ marginBottom: 'var(--space-md)' }}>
                            👉 <Link href={`/rules/${guide.id}/`} style={{ color: 'var(--accent-primary-light)' }}>
                                Browse all {guide.name} presets
                            </Link> or <Link href="/generator/" style={{ color: 'var(--accent-primary-light)' }}>
                                generate custom {guide.name} rules
                            </Link>
                        </p>

                        {idx === 4 && <AdSlot label="Advertisement" />}
                        {idx === 9 && <AdSlot label="Advertisement" />}
                    </section>
                ))}

                <AdSlot label="Advertisement" />

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-2xl)', marginTop: 'var(--space-2xl)', marginBottom: 'var(--space-md)' }}>
                    Get Started
                </h2>
                <p style={{ marginBottom: 'var(--space-lg)' }}>
                    Ready to create rules for your project? Use our free generator — it supports all 15 IDEs and 20+ frameworks:
                </p>
                <Link href="/generator/" className="btn btn-primary btn-lg">
                    🚀 Generate Rules for Any IDE
                </Link>
            </div>
        </article>
    );
}
