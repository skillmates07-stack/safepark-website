import './globals.css';
import Navbar from '../components/layout/Navbar';

export const metadata = {
  title: 'SafePark - Premium Car Protection Solutions',
  description: 'Professional retractable carport solutions designed for elegance, engineered for durability, trusted across India.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-br from-[#0f172a] via-[#0f2d2a] to-[#052e16] min-h-screen text-white">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
