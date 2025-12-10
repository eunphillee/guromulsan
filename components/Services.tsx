import styles from './Services.module.css'

const services = [
  {
    title: '임베디드 시스템 개발',
    description: '마이크로컨트롤러 기반의 임베디드 시스템 설계 및 개발',
    icon: '🔧',
  },
  {
    title: 'IoT 솔루션',
    description: '사물인터넷 기반의 스마트 디바이스 및 플랫폼 구축',
    icon: '🌐',
  },
  {
    title: '펌웨어 개발',
    description: '하드웨어 최적화된 펌웨어 설계 및 개발',
    icon: '⚙️',
  },
  {
    title: '디지털 제어 시스템',
    description: '산업용 디지털 제어 시스템 설계 및 구현',
    icon: '🎛️',
  },
  {
    title: '하드웨어 설계',
    description: 'PCB 설계 및 하드웨어 프로토타이핑',
    icon: '💻',
  },
  {
    title: '시스템 통합',
    description: '하드웨어와 소프트웨어의 완벽한 통합 솔루션',
    icon: '🔗',
  },
]

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <h2 className="section-title">서비스</h2>
        <p className="section-subtitle">
          전문적인 디지털임베디드 솔루션을 제공합니다
        </p>
        <div className={styles.grid}>
          {services.map((service, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
