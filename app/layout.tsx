import './globals.css'
import { Open_Sans  } from 'next/font/google';
import Navbar from 'app/(shared)/Navbar';
const openSans = Open_Sans ({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog Ai app',
  description: 'Blog built in Next JS that uses AI',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={openSans.className}>{children}</body>
      {/* <Footer /> */}
    </html>
  )
}
