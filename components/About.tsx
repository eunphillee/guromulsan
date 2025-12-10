import styles from './About.module.css'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">회사소개</h2>
        <p className="section-subtitle">
          디지털임베디드 솔루션의 전문가
        </p>
        <div className={styles.content}>
          <div className={styles.text}>
            <h3 className={styles.heading}>구로물산에 오신 것을 환영합니다</h3>
            <p className={styles.paragraph}>
              구로물산은 디지털임베디드 개발 분야의 전문 기업으로,
              최신 기술과 풍부한 경험을 바탕으로 고객의 다양한 요구사항을
              충족시키는 솔루션을 제공합니다.
            </p>
            <p className={styles.paragraph}>
              우리는 하드웨어와 소프트웨어의 완벽한 통합을 통해
              혁신적인 제품과 서비스를 개발하며, 고객의 비즈니스 성장에
              기여하고 있습니다.
            </p>
            <div className={styles.stats}>
              <div className={styles.stat}>
                <div className={styles.statNumber}>10+</div>
                <div className={styles.statLabel}>년 이상 경력</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>완료 프로젝트</div>
              </div>
              <div className={styles.stat}>
                <div className={styles.statNumber}>100+</div>
                <div className={styles.statLabel}>고객만족</div>
              </div>
            </div>
          </div>
          <div className={styles.image}>
            <img 
              src="/images/digital01.png" 
              alt="구로물산 회사 이미지" 
              className={styles.companyImage}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
