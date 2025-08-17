import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SafePark - Premium Retractable Carports | Coimbatore',
  description: 'SafePark offers stylish, portable & weatherproof retractable carports. Protect your luxury cars with our galvanized frames and Oxford 600D fabric. Made in Coimbatore.',
  keywords: 'retractable carport, car shelter, vehicle protection, Coimbatore, weatherproof carport, luxury car protection, galvanized frame, Oxford 600D fabric',
  authors: [{ name: 'SafePark India' }],
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
  openGraph: {
    title: 'SafePark - Premium Retractable Carports',
    description: 'Protect your luxury cars with SafePark retractable carports. Made in Coimbatore with premium materials.',
    type: 'website',
    locale: 'en_IN',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen antialiased`}>
        {/* Animated background gradients */}
        <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-pink-900/20 animate-pulse"></div>
        <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-slate-900/10 to-transparent"></div>
        
        {/* Floating glass orbs for ambient effect */}
        <div className="fixed top-10 left-10 w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-float"></div>
        <div className="fixed bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        
        {/* Main content */}
        <div className="relative z-10 min-h-screen">
          {children}
        </div>
        
        {/* Noise texture overlay for premium feel */}
        <div className="fixed inset-0 opacity-20 mix-blend-soft-light pointer-events-none"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
             }}>
        </div>
      </body>
    </html>
  )
}
