import { PRESETS } from '@/data/presets';
import PresetDetail from './PresetDetail';

export function generateStaticParams() {
    return PRESETS.map((preset) => ({
        slug: preset.id,
    }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const preset = PRESETS.find((p) => p.id === slug);
    if (!preset) {
        return { title: 'Preset Not Found' };
    }
    return {
        title: `${preset.name} AI Coding Rules — Free Generator`,
        description: `Generate ${preset.name} rules files for Cursor, Windsurf, Claude, Copilot, and Cline. Free one-click download with best practices for ${preset.framework}.`,
        keywords: [`cursor rules ${preset.framework.toLowerCase()}`, `${preset.framework.toLowerCase()} cursorrules`, `best cursor rules ${preset.name.toLowerCase()}`, `${preset.framework.toLowerCase()} AI coding rules`],
    };
}

export default async function PresetDetailPage({ params }) {
    const { slug } = await params;
    const preset = PRESETS.find((p) => p.id === slug);
    return <PresetDetail presetId={preset ? preset.id : null} />;
}
