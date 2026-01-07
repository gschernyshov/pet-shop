import type { Metadata } from 'next'
import { Nunito, Inter } from 'next/font/google'
import { Providers } from './providers'
import { Header } from '../src/shared/ui/Header'
import { Footer } from '../src/shared/ui/Footer'
import { siteConfig } from '@/src/shared/config /app'
import './globals.css'

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-nunito",
})

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${nunito.variable} ${inter.variable} antialiased`}
      >
        <Providers>
          <Header />
          <main className="px-5">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
