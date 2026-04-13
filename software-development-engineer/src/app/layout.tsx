import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import JsonLd from '@/components/JsonLd';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
    subsets: ['latin'],
    variable: '--font-heading',
    weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
    title: 'Yash Kansal | Software Engineer',
    description: 'Yash Kansal is a Software Engineer specializing in full stack development, real-time systems, cloud architecture, and scalable web applications.',
    icons: {
        icon: '/images/ykansal.png',
        shortcut: '/images/ykansal.png',
        apple: '/images/ykansal.png',
    },
    applicationName: 'Yash Kansal Portfolio',
    keywords: ['Software Engineer', 'React Developer', 'Next.js Developer', 'UI/UX Designer', 'Web Development', 'JavaScript', 'TypeScript', 'Portfolio', 'Backend & Frontend Engineering', 'Scalable Systems'],
    authors: [{ name: 'Yash Kansal' }],
    creator: 'Yash Kansal',
    publisher: 'Yash Kansal',
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
    openGraph: {
        title: 'Yash Kansal | Software Engineer',
        description: 'Explore the portfolio of Yash Kansal, featuring high-performance web applications and modern UI/UX designs.',
        url: 'https://yashkansal.dev',
        siteName: 'Yash Kansal Portfolio',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Yash Kansal | Software Engineer',
        description: 'High-performance web applications and premium UI/UX design.',
        creator: '@yashkansal_dev',
    },
    
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <meta name="google-adsense-account" content="ca-pub-3986882594296568" />
            </head>
            <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
                <JsonLd />
                {children}
            </body>
        </html>
    );
}
