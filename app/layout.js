import './globals.css';
import { Inter } from 'next/font/google';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata = {
  title: 'Vignesh - Full Stack Developer & UI/UX Designer',
  description: 'Modern portfolio showcasing web development projects, design work, and professional experience. Specializing in React, Next.js, and user-centered design.',
  keywords: 'web developer, full stack, react, next.js, ui/ux design, portfolio',
  authors: [{ name: 'Vignesh' }],
  openGraph: {
    title: 'Vignesh - Full Stack Developer & UI/UX Designer',
    description: 'Modern portfolio showcasing web development projects and design work',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vignesh - Full Stack Developer & UI/UX Designer',
    description: 'Modern portfolio showcasing web development projects and design work',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
