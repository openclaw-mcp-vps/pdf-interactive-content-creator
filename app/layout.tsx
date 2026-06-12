import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'PDF Interactive Content Creator',
  description: 'Create interactive games and content in PDFs. Embed JavaScript games, forms, and animations into your PDFs with a visual drag-and-drop editor.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="c3922244-5acb-44b6-afbc-1da5908f2f20"></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
