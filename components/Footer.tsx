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
              <li>📧 contact@guromulsan.com</li>
              <li>📞 02-1234-5678</li>
              <li>📍 서울특별시 구로구</li>
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
