import { ThemeProvider } from 'next-themes';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-serif' });

export const metadata = {
  title: 'Priya Mishra',
  description: 'Portfolio of Priya Mishra - A passionate FullStack Developer specializing in React, Next.js, and AI/ML integration. Building elegant, performant web experiences.',
  keywords: 'Frontend Developer, React Developer, Next.js, AI/ML, Web Development, Portfolio, Priya Mishra',
  authors: [{ name: 'Priya Mishra' }],
  openGraph: {
    title: 'Priya Mishra',
    description: 'Portfolio showcasing modern web applications and AI/ML projects',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priya Mishra',
    description: 'Building elegant, performant web experiences',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}