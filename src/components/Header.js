'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
    return (
        <header className="site-header">
            <div className="header-inner">
                <Link href="/" className="site-logo">
                    <Image src="/logo.png" alt="RulesForAI Logo" width={28} height={28} className="logo-icon" />
                    <span>Rules<span className="text-gradient">ForAI</span></span>
                </Link>
                <nav className="site-nav" aria-label="Main navigation">
                    <Link href="/generator/">Generator</Link>
                    <Link href="/presets/">Presets</Link>
                    <Link href="/blog/">Blog</Link>
                    <Link href="/about/">About</Link>
                </nav>
                <button className="mobile-menu-btn" aria-label="Open menu">☰</button>
            </div>
        </header>
    );
}
