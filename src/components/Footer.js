import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <div className="site-logo">
                            <Image src="/logo.png" alt="RulesForAI Logo" width={28} height={28} className="logo-icon" />
                            <span>Rules<span className="text-gradient">ForAI</span></span>
                        </div>
                        <p>
                            The free, universal AI coding rules file generator. Build perfect config files for Cursor, Windsurf, Claude, Copilot, Cline, and 10 more AI IDEs — in seconds.
                        </p>
                    </div>

                    <div className="footer-links">
                        <h4>Tools</h4>
                        <ul>
                            <li><Link href="/generator/">Universal Generator</Link></li>
                            <li><Link href="/presets/">Preset Library</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Guides</h4>
                        <ul>
                            <li><Link href="/blog/what-is-cursorrules/">What is .cursorrules?</Link></li>
                            <li><Link href="/blog/ai-coding-rules-guide/">All IDE Rules Guide</Link></li>
                            <li><Link href="/blog/best-ai-coding-rules-2026/">Best AI Rules 2026</Link></li>
                        </ul>
                    </div>

                    <div className="footer-links">
                        <h4>Company</h4>
                        <ul>
                            <li><Link href="/about/">About</Link></li>
                            <li><Link href="/privacy/">Privacy Policy</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {currentYear} RulesForAI. All rights reserved. Not affiliated with Cursor, Windsurf, or any AI IDE.</p>
                </div>
            </div>
        </footer>
    );
}
