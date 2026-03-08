export const metadata = {
    title: 'Privacy Policy',
    description: 'Privacy Policy for RulesForAI — the free AI coding rules file generator.',
};

export default function PrivacyPage() {
    return (
        <div className="container" style={{ paddingTop: 'var(--space-2xl)', paddingBottom: 'var(--space-4xl)', maxWidth: '800px' }}>
            <h1 className="section-title">Privacy Policy</h1>
            <p style={{ color: 'var(--text-muted)', marginBottom: 'var(--space-2xl)' }}>
                Last updated: March 2026
            </p>

            <div style={{ color: 'var(--text-secondary)', lineHeight: 1.8 }}>
                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)', marginTop: 'var(--space-xl)' }}>
                    1. Information We Collect
                </h2>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    RulesForAI does not collect, store, or process any personal information. The rules file generator
                    runs entirely in your browser — no data is sent to any server.
                </p>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)', marginTop: 'var(--space-xl)' }}>
                    2. Analytics
                </h2>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    We may use Google Analytics to understand how visitors use our site (page views, time on site,
                    country of origin). This data is anonymous and aggregated. Google Analytics uses cookies to track
                    this information. You can opt out by disabling cookies in your browser.
                </p>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)', marginTop: 'var(--space-xl)' }}>
                    3. Advertising
                </h2>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    We display advertisements through Google AdSense. Google may use cookies to serve ads based on
                    your prior visits to this or other websites. You can opt out of personalized advertising by
                    visiting Google&apos;s <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer">Ad Settings</a>.
                </p>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)', marginTop: 'var(--space-xl)' }}>
                    4. Cookies
                </h2>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    This site uses cookies only for analytics and advertising purposes (Google Analytics and Google AdSense).
                    We do not use cookies for tracking, authentication, or any other purpose.
                </p>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)', marginTop: 'var(--space-xl)' }}>
                    5. Third-Party Services
                </h2>
                <p style={{ marginBottom: 'var(--space-md)' }}>
                    We use the following third-party services:
                </p>
                <ul style={{ paddingLeft: 'var(--space-xl)', marginBottom: 'var(--space-md)' }}>
                    <li>Google Analytics (anonymous usage analytics)</li>
                    <li>Google AdSense (advertising)</li>
                    <li>Google Fonts (typography)</li>
                </ul>

                <h2 style={{ color: 'var(--text-heading)', fontSize: 'var(--font-size-xl)', marginBottom: 'var(--space-md)', marginTop: 'var(--space-xl)' }}>
                    6. Contact
                </h2>
                <p>
                    For questions about this privacy policy, contact us at{' '}
                    <a href="mailto:hello@rulesforai.com">hello@rulesforai.com</a>.
                </p>
            </div>
        </div>
    );
}
