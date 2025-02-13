import type { Metadata } from 'next';
import './styles/globals.css';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Psychologists services',
  description: 'A website to find psychological services',
};

export default function RootLayout({
  children,
  header,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className={styles.page}>
          {header}
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
