import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import styles from './page.module.css';
import { AuthProvider } from './components/AuthProvider';

export const metadata: Metadata = {
  title: 'Psychologists services',
  description: 'A website to find psychological services',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  header,
  modal,
}: Readonly<{
  children: React.ReactNode;
  header: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className={styles.page}>
          <AuthProvider>
            {header}
            {modal}
            <main>{children}</main>
          </AuthProvider>
        </div>
      </body>
    </html>
  );
}
