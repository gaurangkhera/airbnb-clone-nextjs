import './globals.css'
import { Nunito } from 'next/font/google';
import Navbar from './components/Navbar';
import RegisterModal from './components/RegisterModal';

const font = Nunito({ subsets: ['latin']})

export const metadata = {
  title: 'AirBnB',
  description: 'AirBnB - host and reserve rooms.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <RegisterModal /> 
        <Navbar />
        {children}
        </body>
    </html>
  )
}
