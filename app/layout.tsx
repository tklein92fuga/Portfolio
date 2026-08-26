import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Quentin Alterescu — Product Designer',
  description:
    'Portfolio de Quentin Alterescu, product designer spécialisé dans les expériences utiles, humaines et collaboratives.',
  openGraph: {
    title: 'Quentin Alterescu — Product Designer',
    description:
      'Portfolio de Quentin Alterescu, product designer spécialisé dans les expériences utiles, humaines et collaboratives.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Quentin Alterescu — Product Designer',
    description:
      'Portfolio de Quentin Alterescu, product designer spécialisé dans les expériences utiles, humaines et collaboratives.',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
