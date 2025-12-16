import './globals.css';
import type {Metadata} from 'next';
import {baseMetadata} from '../content/seo';

export const metadata: Metadata = baseMetadata;

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
