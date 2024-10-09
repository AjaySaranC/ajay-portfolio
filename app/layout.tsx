import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight : ['300','500','600'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Ajay Saran - Portfolio Website',
  description: 'A portfolio about me',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
