import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import styles from './page.module.css'

// Google 판매자 센터(Merchant Center) 배송·반품 설정과 반드시 동일하게 유지
export const metadata: Metadata = {
  title: '배송 · 반품 · 교환 정책 | 구로물산',
  description: '구로물산 GURO-100 등 판매 제품의 배송, 반품, 교환, 환불 정책 안내입니다.',
  alternates: { canonical: '/return-policy' },
}

export default function ReturnPolicyPage() {
  return (
    <main>
      <Header />
      <section className={`section ${styles.policy}`}>
        <div className="container">
          <h1 className={styles.title}>배송 · 반품 · 교환 정책</h1>
          <p className={styles.updated}>시행일: 2026년 10월 15일</p>

          <h2>1. 배송 안내</h2>
          <ul>
            <li>배송 지역: 대한민국 전 지역</li>
            <li>배송비: 무료배송</li>
            <li>주문 마감: 평일(월~금) 오후 2시 이전 주문 및 결제 확인 건은 당일 처리합니다.</li>
            <li>상품 준비: 영업일 기준 1~2일</li>
            <li>택배 운송: 영업일 기준 1~3일</li>
            <li>총 소요 기간: 영업일 기준 2~5일 (주말·공휴일 제외)</li>
          </ul>

          <h2>2. 반품 · 교환 기간</h2>
          <ul>
            <li>상품을 받은 날부터 <strong>7일 이내</strong>에 반품 또는 교환을 신청할 수 있습니다.</li>
            <li>
              상품이 표시·광고 내용과 다르거나 계약 내용과 다르게 이행된 경우에는 받은 날부터 3개월 이내,
              그 사실을 안 날 또는 알 수 있었던 날부터 30일 이내에 신청할 수 있습니다.
            </li>
          </ul>

          <h2>3. 반품 · 교환 조건</h2>
          <ul>
            <li>사용하지 않은 새 상품으로, 원래 포장과 구성품이 그대로인 경우에 가능합니다.</li>
            <li>
              다음의 경우에는 반품·교환이 제한될 수 있습니다: 고객의 책임으로 상품이 멸실·훼손된 경우,
              사용 또는 일부 소비로 상품 가치가 현저히 감소한 경우, 고객 요청에 따라 개별 사양으로 맞춤
              제작(커스터마이징)된 상품인 경우.
            </li>
          </ul>

          <h2>4. 반품 방법 및 비용</h2>
          <ul>
            <li>반품은 택배(우편)로 접수합니다. 반품 송장은 고객이 준비해 주셔야 합니다.</li>
            <li>단순 변심에 의한 반품·교환: 왕복 배송비는 고객이 부담합니다.</li>
            <li>상품 불량 또는 오배송: 배송비를 포함한 모든 비용을 구로물산이 부담합니다.</li>
            <li>재입고 수수료는 받지 않습니다.</li>
          </ul>

          <h2>5. 환불</h2>
          <ul>
            <li>반품 상품이 도착한 날부터 <strong>영업일 기준 3일 이내</strong>에 환불합니다.</li>
            <li>환불은 결제하신 방법과 동일한 수단으로 진행합니다.</li>
          </ul>

          <h2>6. 신청 및 문의</h2>
          <ul>
            <li>
              이메일: <a href="mailto:gurodnt@guromulsan.co.kr">gurodnt@guromulsan.co.kr</a>
            </li>
            <li>
              전화: <a href="tel:010-2684-4484">010-2684-4484</a> (평일 09:00~18:00)
            </li>
            <li>반품 주소: 경기도 광명시 소하로 190, B동 705호(소하동, 광명G타워) 구로물산</li>
          </ul>

          <p className={styles.back}>
            <a href="/#product">← GURO-100 제품 페이지로 돌아가기</a>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  )
}
