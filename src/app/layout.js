import './globals.css';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CarpTravel',
  description: 'Trips to the most beautiful parts of the Carpathians',
  openGraph: {
    title: 'CarpTravel',
    description: 'Trips to the most beautiful parts of the Carpathians',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
