// Post-build script: generates sitemap.xml in the `out/` directory
// Run: node scripts/generate-sitemap.mjs

const IDE_OPTIONS = [
    { id: 'cursor', name: 'Cursor', file: '.cursorrules' },
    { id: 'windsurf', name: 'Windsurf', file: '.windsurfrules' },
    { id: 'claude', name: 'Claude Code', file: 'CLAUDE.md' },
    { id: 'copilot', name: 'GitHub Copilot', file: '.github/copilot-instructions.md' },
    { id: 'cline', name: 'Cline', file: '.clinerules' },
    { id: 'zed', name: 'Zed AI', file: '.zed/rules' },
    { id: 'aider', name: 'Aider', file: '.aider.conf.yml' },
    { id: 'continue', name: 'Continue.dev', file: '.continuerc.json' },
    { id: 'devin', name: 'Devin AI', file: 'devin.md' },
    { id: 'amazonq', name: 'Amazon Q', file: '.amazonq/rules' },
    { id: 'bolt', name: 'Bolt.new', file: 'bolt.instructions.md' },
    { id: 'lovable', name: 'Lovable', file: 'lovable.instructions.md' },
    { id: 'replit', name: 'Replit AI', file: '.replit/ai-rules' },
    { id: 'augment', name: 'Augment Code', file: 'augment-guidelines.md' },
    { id: 'jetbrains', name: 'JetBrains AI', file: 'guidelines.md' },
];

const PRESET_IDS = [
    'nextjs-typescript', 'react-tailwind', 'python-fastapi', 'go-gin',
    'nodejs-express', 'vue-nuxt', 'rust-actix', 'django-python',
    'flutter-dart', 'svelte-sveltekit', 'angular-typescript', 'laravel-php',
    'ruby-rails', 'spring-java', 'react-native', 'swift-swiftui',
    'kotlin-android', 'astro', 'remix-react', 't3-stack',
];

const BASE = 'https://rulesforai.vercel.app';
const today = new Date().toISOString().split('T')[0];

function url(loc, priority = '0.7', freq = 'monthly') {
    return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${freq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

const urls = [
    url(`${BASE}/`, '1.0', 'weekly'),
    url(`${BASE}/generator/`, '0.9', 'monthly'),
    url(`${BASE}/presets/`, '0.9', 'weekly'),
    url(`${BASE}/about/`, '0.5', 'monthly'),
    url(`${BASE}/privacy/`, '0.3', 'yearly'),
    url(`${BASE}/blog/`, '0.8', 'weekly'),
    url(`${BASE}/blog/what-is-cursorrules/`, '0.8', 'monthly'),
    url(`${BASE}/blog/ai-coding-rules-guide/`, '0.9', 'weekly'),
    url(`${BASE}/blog/best-ai-coding-rules-2026/`, '0.9', 'weekly'),
];

// Preset pages /presets/[slug]/
PRESET_IDS.forEach((id) => urls.push(url(`${BASE}/presets/${id}/`, '0.8')));

// IDE landing pages /rules/[ide]/
IDE_OPTIONS.forEach((ide) => urls.push(url(`${BASE}/rules/${ide.id}/`, '0.8')));

// Programmatic SEO pages /rules/[ide]/[framework]/
IDE_OPTIONS.forEach((ide) => {
    PRESET_IDS.forEach((preset) => {
        urls.push(url(`${BASE}/rules/${ide.id}/${preset}/`, '0.7'));
    });
});

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

import { writeFileSync, existsSync, mkdirSync } from 'fs';
const outDir = existsSync('./out') ? './out' : './public';
writeFileSync(`${outDir}/sitemap.xml`, sitemap);
console.log(`✅ Sitemap generated: ${urls.length} URLs → ${outDir}/sitemap.xml`);
