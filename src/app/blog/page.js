import Link from 'next/link';
import AdSlot from '@/components/AdSlot';

export const metadata = {
    title: 'Blog — AI Coding Rules Guides & Tips',
    description: 'Learn everything about AI coding rules files. Guides for .cursorrules, .windsurfrules, CLAUDE.md, and more. Tips to supercharge your AI coding workflow.',
};

const BLOG_POSTS = [
    {
        slug: 'ai-coding-rules-guide',
        title: 'Complete Guide to AI Coding Rules Files for Every IDE',
        excerpt: 'Master rules files for all 15 AI coding tools — Windsurf, Claude Code, Copilot, Cline, Zed, Devin, Bolt.new, and more. Setup, format, and examples included.',
        date: 'March 6, 2026',
        readTime: '15 min read',
        tags: ['All IDEs', 'Complete Guide'],
    },
    {
        slug: 'best-ai-coding-rules-2026',
        title: 'Best AI Coding Rules for Every IDE in 2026',
        excerpt: 'Compare .cursorrules vs .windsurfrules vs CLAUDE.md. Complete comparison of all 15 AI IDE rules files — find the best one for your workflow.',
        date: 'March 6, 2026',
        readTime: '10 min read',
        tags: ['Comparison', '2026'],
    },
    {
        slug: 'what-is-cursorrules',
        title: 'What is a .cursorrules File? Complete Guide for 2026',
        excerpt: 'Learn what .cursorrules files are, why they matter, and how to create one that makes Cursor AI write better code for your projects.',
        date: 'March 3, 2026',
        readTime: '8 min read',
        tags: ['Cursor', 'Guide'],
    },
];

export default function BlogPage() {
    return (
        <div className="container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-4xl)' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
                <h1 className="section-title">
                    AI Rules <span className="text-gradient">Blog</span>
                </h1>
                <p className="section-subtitle">
                    Guides, tutorials, and tips for getting the most out of AI coding rules files
                </p>
            </div>

            <AdSlot label="Advertisement" />

            <div className="blog-grid">
                {BLOG_POSTS.map((post) => (
                    <Link href={`/blog/${post.slug}/`} key={post.slug} className="card blog-card" style={{ textDecoration: 'none' }}>
                        <div className="blog-meta">
                            <span>{post.date}</span>
                            <span>·</span>
                            <span>{post.readTime}</span>
                        </div>
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <div className="preset-tags" style={{ marginTop: 'var(--space-md)' }}>
                            {post.tags.map((tag) => (
                                <span className="tag" key={tag}>{tag}</span>
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
