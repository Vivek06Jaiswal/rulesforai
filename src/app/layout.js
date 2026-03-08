import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
  title: {
    default: 'RulesForAI — Free AI Coding Rules File Generator',
    template: '%s | RulesForAI',
  },
  description: 'Generate perfect .cursorrules, .windsurfrules, CLAUDE.md, and copilot-instructions.md files instantly. Free universal AI coding rules generator for every framework.',
  keywords: ['cursor rules generator', 'windsurf rules generator', 'cursorrules', 'windsurfrules', 'AI coding rules', 'claude md generator', 'copilot instructions'],
  authors: [{ name: 'RulesForAI' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'RulesForAI',
    title: 'RulesForAI — Free AI Coding Rules File Generator',
    description: 'Generate perfect AI coding rules files for Cursor, Windsurf, Claude, Copilot & Cline in seconds.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RulesForAI — Free AI Coding Rules File Generator',
    description: 'Generate perfect AI coding rules files for Cursor, Windsurf, Claude, Copilot & Cline in seconds.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
