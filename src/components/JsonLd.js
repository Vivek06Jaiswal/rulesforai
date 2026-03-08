export default function JsonLd({ ideName, frameworkName, fileName, description }) {
    const schema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: `${ideName} Rules for ${frameworkName}`,
        description: description,
        applicationCategory: 'DeveloperApplication',
        operatingSystem: 'All',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
        },
        creator: {
            '@type': 'Organization',
            name: 'RulesForAI',
            url: 'https://rulesforai.com',
        },
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}
