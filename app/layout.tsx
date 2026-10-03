import type { Metadata } from 'next'
import './globals.css'

const SITE_URL = 'https://www.guromulsan.co.kr'
const TITLE = '구로물산 | RFID·NFC 리더기 맞춤 개발, 디지털 임베디드 전문'
const DESCRIPTION =
  '구로물산은 RFID·NFC 카드리더기와 임베디드 시스템을 현장에 맞춰 커스터마이징 개발합니다. 버스정류장 BIS 잔액조회기에 적용된 GURO-100 비접촉식 스마트카드 리더기를 만나보세요.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    '구로물산',
    'RFID 리더기',
    'NFC 리더기',
    '카드리더기',
    '스마트카드 리더기',
    'GURO-100',
    '교통카드 잔액조회기',
    'BIS 단말기',
    '임베디드 개발',
    '펌웨어 개발',
    'RF 커스터마이징',
    '광명',
  ],
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: SITE_URL,
    siteName: '구로물산',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: '/images/digital01.png', width: 1024, height: 1024, alt: '구로물산' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/images/digital01.png'],
  },
  robots: { index: true, follow: true },
  icons: { icon: '/favicon.png' },
  verification: {
    google: 'x4SyJdrK7wfyv8nZdotPH-hPyLIca8M0B6FiDuiTE3Q',
    other: {
      'naver-site-verification': '1ba6adf1025de3ef2385a0ced0f996c682506c28',
    },
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: '구로물산',
  alternateName: 'Guromulsan',
  url: SITE_URL,
  logo: `${SITE_URL}/images/GMlogo01.png`,
  email: 'gurodnt@guromulsan.co.kr',
  telephone: '+82-10-2684-4484',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '소하로 190, B동 705호(소하동, 광명G타워)',
    addressLocality: '광명시',
    addressRegion: '경기도',
    addressCountry: 'KR',
  },
  sameAs: ['https://www.youtube.com/@구로물산'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}
