'use client';

import { useState, useCallback, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { PRESETS, IDE_OPTIONS, TOGGLE_OPTIONS, generateRules } from '@/data/presets';
import AdSlot from '@/components/AdSlot';

export default function GeneratorPage() {
    const searchParams = useSearchParams();
    const ideParam = searchParams.get('ide');

    const [selectedIDE, setSelectedIDE] = useState(() => {
        // Check if IDE param exists and is valid
        if (ideParam && IDE_OPTIONS.some((ide) => ide.id === ideParam)) {
            return ideParam;
        }
        return 'cursor';
    });
    const [selectedPreset, setSelectedPreset] = useState(PRESETS[0].id);
    const [toggles, setToggles] = useState(() => {
        const initial = {};
        TOGGLE_OPTIONS.forEach((t) => {
            initial[t.id] = t.default;
        });
        return initial;
    });
    const [copied, setCopied] = useState(false);

    // Update IDE when URL param changes
    useEffect(() => {
        if (ideParam && IDE_OPTIONS.some((ide) => ide.id === ideParam)) {
            setSelectedIDE(ideParam);
        }
    }, [ideParam]);

    const preset = PRESETS.find((p) => p.id === selectedPreset);
    const generated = preset ? generateRules(preset, selectedIDE, toggles) : { content: '', filename: '' };

    const handleToggle = useCallback((id) => {
        setToggles((prev) => ({ ...prev, [id]: !prev[id] }));
    }, []);

    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText(generated.content);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }, [generated.content]);

    const handleDownload = useCallback(() => {
        const blob = new Blob([generated.content], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = generated.filename.replace(/\//g, '-');
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }, [generated]);

    return (
        <div className="container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-4xl)' }}>
            <div style={{ textAlign: 'center', marginBottom: 'var(--space-2xl)' }}>
                <h1 className="section-title">
                    AI Rules <span className="text-gradient">Generator</span>
                </h1>
                <p className="section-subtitle">
                    Select your IDE, pick a framework, customize options → get your rules file instantly
                </p>
            </div>

            <div className="generator-layout">
                {/* Controls */}
                <div className="generator-controls">
                    {/* IDE Selection */}
                    <div className="control-group">
                        <label>1. Select Your AI IDE</label>
                        <div className="ide-selector">
                            {IDE_OPTIONS.map((ide) => (
                                <button
                                    key={ide.id}
                                    className={`ide-btn ${selectedIDE === ide.id ? 'selected' : ''}`}
                                    onClick={() => setSelectedIDE(ide.id)}
                                    type="button"
                                >
                                    <span className="ide-icon">{ide.icon}</span>
                                    {ide.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Framework Selection */}
                    <div className="control-group">
                        <label htmlFor="preset-select">2. Select Framework</label>
                        <select
                            id="preset-select"
                            value={selectedPreset}
                            onChange={(e) => setSelectedPreset(e.target.value)}
                        >
                            {PRESETS.map((p) => (
                                <option key={p.id} value={p.id}>
                                    {p.icon} {p.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Toggles */}
                    <div className="control-group">
                        <label>3. Customize Rules</label>
                        {TOGGLE_OPTIONS.map((opt) => (
                            <div className="toggle-row" key={opt.id}>
                                <span className="toggle-label" title={opt.desc}>
                                    {opt.label}
                                </span>
                                <input
                                    type="checkbox"
                                    className="toggle-switch"
                                    checked={toggles[opt.id]}
                                    onChange={() => handleToggle(opt.id)}
                                    aria-label={opt.label}
                                />
                            </div>
                        ))}
                    </div>

                    <AdSlot label="Ad" />
                </div>

                {/* Preview */}
                <div className="preview-panel">
                    <div className="preview-header">
                        <div className="preview-tabs">
                            {IDE_OPTIONS.map((ide) => (
                                <button
                                    key={ide.id}
                                    className={`preview-tab ${selectedIDE === ide.id ? 'active' : ''}`}
                                    onClick={() => setSelectedIDE(ide.id)}
                                    type="button"
                                >
                                    {ide.icon} {ide.file}
                                </button>
                            ))}
                        </div>
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
            </div>
        </div>
    );
}
