import './globals.css';
import type {ReactNode} from 'react';
import {Metadata} from 'next';

export const metadata: Metadata = {
  title: 'ID GROUP - Corporate',
  description: 'Solutions industrielles pour le confort, l’hygiène et le soin du vivant.',
  icons: [{rel: 'icon', url: '/favicon.ico'}],
};

export default function RootLayout({children}: {children: ReactNode}) {
  return (
    <html suppressHydrationWarning lang="fr">
      <body>{children}</body>
    </html>
  );
}
