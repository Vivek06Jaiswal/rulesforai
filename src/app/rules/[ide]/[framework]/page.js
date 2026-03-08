import { PRESETS, IDE_OPTIONS } from '@/data/presets';
import PresetDetailWithIDE from './PresetDetailWithIDE';
import JsonLd from '@/components/JsonLd';

export function generateStaticParams() {
    const params = [];
    for (const ide of IDE_OPTIONS) {
        for (const preset of PRESETS) {
            params.push({ ide: ide.id, framework: preset.id });
        }
    }
    return params;
}

export async function generateMetadata({ params }) {
    const { ide, framework } = await params;
    const ideMeta = IDE_OPTIONS.find((i) => i.id === ide);
    const preset = PRESETS.find((p) => p.id === framework);

    if (!ideMeta || !preset) {
        return { title: 'Preset Not Found | RulesForAI' };
    }

    const title = `${ideMeta.name} Rules for ${preset.name} — Free Download`;
    const description = `Generate and download ${ideMeta.file} optimized for ${preset.name} projects. Free one-click export of AI coding rules for ${ideMeta.name}.`;

    return {
        title,
        description,
        keywords: [
            `${ideMeta.name.toLowerCase()} rules ${preset.framework.toLowerCase()}`,
            `${ideMeta.file} ${preset.framework.toLowerCase()}`,
            `best ${ideMeta.name.toLowerCase()} rules ${preset.name.toLowerCase()}`,
            `${preset.framework.toLowerCase()} AI coding rules`,
            `${ideMeta.name.toLowerCase()} rules generator`,
        ],
        openGraph: {
            title,
            description,
        },
    };
}

export default async function RulesPage({ params }) {
    const { ide, framework } = await params;
    const ideMeta = IDE_OPTIONS.find((i) => i.id === ide);
    const preset = PRESETS.find((p) => p.id === framework);

    return (
        <>
            {ideMeta && preset && (
                <JsonLd
                    ideName={ideMeta.name}
                    frameworkName={preset.name}
                    fileName={ideMeta.file}
                    description={`Generate and download ${ideMeta.file} optimized for ${preset.name} projects.`}
                />
            )}
            <PresetDetailWithIDE ideId={ide} presetId={framework} />
        </>
    );
}
