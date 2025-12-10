import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          <div className={styles.section}>
            <div className={styles.logoContainer}>
              <img src="/images/GMlogo01.png" alt="구로물산 로고" className={styles.logoImage} />
              <h3 className={styles.logo}>구로물산</h3>
            </div>
            <p className={styles.description}>
              디지털임베디드 개발 전문 기업
            </p>
          </div>
          <div className={styles.section}>
            <h4 className={styles.title}>빠른 링크</h4>
            <ul className={styles.links}>
              <li><a href="#home">홈</a></li>
              <li><a href="#about">회사소개</a></li>
              <li><a href="#services">서비스</a></li>
              <li><a href="#contact">문의하기</a></li>
            </ul>
          </div>
          <div className={styles.section}>
            <h4 className={styles.title}>연락처</h4>
            <ul className={styles.contact}>
              <li>📧 <a href="mailto:gurodnt@guromulsan.co.kr">gurodnt@guromulsan.co.kr</a></li>
              <li>📞 010-2684-4484</li>
              <li>📍 서울특별시 강남구 개포로15길 3-4 1층 101호</li>
            </ul>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {currentYear} 구로물산. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
