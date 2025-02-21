import type { Metadata } from 'next';
import './styles/globals.css';
import styles from './page.module.css';
import { AuthProvider } from './(server)/AuthProvider';

export const metadata: Metadata = {
  title: 'Psychologists services',
  description: 'A website to find psychological services',
};

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
    <html lang="en">
      <body>
        <div className={styles.page}>
          <AuthProvider>
            {header}
            {modal}
          </AuthProvider>
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
