export default function JsonLd() {
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Yash Kansal',
        url: 'https://yashkansal.dev',
        jobTitle: 'Software Engineer',
        sameAs: [
            'https://www.linkedin.com/in/yashkansal-dev/',
            'https://github.com/yashkansal-dev',
            'https://leetcode.com/u/YashKansal-dev/',
            'https://x.com/yashkansal_dev',
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
