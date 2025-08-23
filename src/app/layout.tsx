import './globals.css';
import Navbar from '../components/layout/Navbar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#142528] via-[#142A21] to-[#0d2112] min-h-screen text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
