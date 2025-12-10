import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '구로물산 - 디지털임베디드 개발 전문',
  description: '구로물산은 디지털임베디드 솔루션을 제공하는 전문 개발 업체입니다.',
  icons: {
    icon: '/favicon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}
