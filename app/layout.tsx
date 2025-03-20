import '../styles/globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '明星视频互动平台',
  description: '与您喜爱的明星进行互动交流',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <body>
        <main className="min-h-screen bg-black text-white">
          {children}
        </main>
      </body>
    </html>
  );
} 