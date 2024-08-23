import { Poppins } from 'next/font/google';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins'
})

export const metadata = {
  title: "MJClaypool | Shortly Landing Page"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <link rel="icon" href="/images/favicon.svg" />
      </head>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}