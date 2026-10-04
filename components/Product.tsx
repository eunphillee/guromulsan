import styles from './Product.module.css'

const highlights = [
  { icon: '⚡', title: 'ARM Cortex-M4', text: '고성능 컨트롤러로 빠르고 안정적인 카드 인식' },
  { icon: '🔐', title: 'SAM 4슬롯', text: '결제·인증용 보안 모듈 탑재로 보안성과 확장성 확보' },
  { icon: '🔌', title: '다양한 인터페이스', text: 'USB · RS232 · TTL · Wiegand로 POS·키오스크와 간편 연동' },
  { icon: '🛡️', title: 'IP54 방진방수', text: '-20℃ ~ 80℃ 환경에서도 동작하는 야외형 내구성' },
]

const specs = [
  ['모델명', 'GURO-100'],
  ['제품 유형', '비접촉식 스마트카드(NFC/RFID) 리더기'],
  ['컨트롤러', 'ARM Cortex-M4'],
  ['SAM 슬롯', '4 SAMs (PayOnSAM 옵션)'],
  ['지원 카드', 'Mifare, ISO 14443 Type A/B, ISO 18092(NFC)'],
  ['교통카드', 'T-money, 마이비, 캐시비(EZL) 등 국내 교통카드 (RF 13.56MHz)'],
  ['인터페이스', 'USB, RS232, TTL(232), Wiegand(26/34bit)'],
  ['크기', '105 × 72 × 11.5 mm'],
  ['재질 / 색상', 'ABS Plastic / Black'],
  ['동작 온도', '-20℃ ~ 80℃'],
  ['보호 등급', 'IP54'],
]

const applications = ['버스정류장 BIS 교통카드 잔액조회기', 'POS · 무인 키오스크', '자판기 · 무인단말기', '출입 · 인증 단말']

const productJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'GURO-100 비접촉식 스마트카드 리더기',
  image: 'https://www.guromulsan.co.kr/images/guro-100.jpg',
  description:
    'ARM Cortex-M4와 SAM 4슬롯을 탑재한 NFC/RFID 스마트카드 리더기. 국내 교통카드 잔액조회, USB·RS232·TTL·Wiegand 지원, IP54 방진방수.',
  brand: { '@type': 'Brand', name: '구로물산' },
  manufacturer: { '@type': 'Organization', name: '구로물산' },
  model: 'GURO-100',
}

export default function Product() {
  return (
    <section id="product" className={`section ${styles.product}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <div className="container">
        <h2 className="section-title">제품 소개</h2>
        <p className="section-subtitle">
          GURO-100 비접촉식 스마트카드 리더기 · 교통카드 잔액조회기
        </p>

        <div className={styles.hero}>
          <div className={styles.imageBox}>
            <img
              src="/images/guro-100.jpg"
              alt="GURO-100 비접촉식 스마트카드 리더기"
              className={styles.mainImage}
              loading="lazy"
            />
          </div>
          <div className={styles.intro}>
            <span className={styles.badge}>SIMPLE &amp; RELIABLE CONTACTLESS SMART CARD READER</span>
            <h3 className={styles.productName}>GURO-100</h3>
            <p className={styles.lead}>
              GURO-100은 ARM Cortex-M4 컨트롤러와 4개의 SAM 슬롯을 탑재한 비접촉식 스마트카드(NFC/RFID)
              리더기입니다. 국내 교통카드 잔액조회를 포함한 다양한 결제·인증 환경에 맞춰 설계되었으며,
              기존 POS, 키오스크, 무인단말기에 USB 케이블 하나로 손쉽게 연결할 수 있습니다.
            </p>
            <div className={styles.caseBox}>
              <strong>🚏 납품 사례</strong>
              <p>
                실제 버스정류장 BIS(버스정보시스템) 교통카드 잔액조회기에 적용되어, 야외 현장에서 안정성을
                검증받았습니다. 현장 요구에 맞춘 RF 커스터마이징 개발도 가능합니다.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.highlights}>
          {highlights.map((h) => (
            <div key={h.title} className={styles.highlight}>
              <div className={styles.hIcon}>{h.icon}</div>
              <h4>{h.title}</h4>
              <p>{h.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.detail}>
          <div className={styles.specBox}>
            <h3 className={styles.subTitle}>제품 사양</h3>
            <table className={styles.specTable}>
              <tbody>
                {specs.map(([k, v]) => (
                  <tr key={k}>
                    <th scope="row">{k}</th>
                    <td>{v}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <h3 className={styles.subTitle}>적용 분야</h3>
            <ul className={styles.appList}>
              {applications.map((a) => (
                <li key={a}>{a}</li>
              ))}
            </ul>
            <img
              src="/images/guro-100-cable.jpg"
              alt="GURO-100 케이블 연결 구성"
              className={styles.subImage}
              loading="lazy"
            />
          </div>
          <div className={styles.videoBox}>
            <h3 className={styles.subTitle}>제품 영상</h3>
            <div className={styles.videoFrame}>
              <iframe
                src="https://www.youtube-nocookie.com/embed/XQhVrmek6FI"
                title="구로물산 GURO-100 스마트카드 리더기 소개 영상"
                loading="lazy"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
            <a href="#contact" className={styles.cta}>
              GURO-100 · 맞춤 개발 문의하기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
