import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Md Abidur Rahman | Full Stack Developer',
  description: 'Portfolio of Md Abidur Rahman - Full Stack Developer specializing in modern web applications, 3D/XR experiences, and scalable solutions.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}