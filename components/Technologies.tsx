import styles from './Technologies.module.css'

const technologies = [
  { name: 'ARM Cortex', category: '마이크로컨트롤러' },
  { name: 'STM32', category: '마이크로컨트롤러' },
  { name: 'ESP32', category: 'IoT 플랫폼' },
  { name: 'Raspberry Pi', category: '임베디드 시스템' },
  { name: 'C/C++', category: '프로그래밍 언어' },
  { name: 'Python', category: '프로그래밍 언어' },
  { name: 'FreeRTOS', category: '실시간 OS' },
  { name: 'Linux', category: '임베디드 OS' },
  { name: 'MQTT', category: '통신 프로토콜' },
  { name: 'Modbus', category: '통신 프로토콜' },
  { name: 'KiCad', category: 'PCB 설계' },
  { name: 'Altium', category: 'PCB 설계' },
]

export default function Technologies() {
  return (
    <section id="technologies" className="section">
      <div className="container">
        <h2 className="section-title">기술 스택</h2>
        <p className="section-subtitle">
          최신 기술과 도구를 활용한 전문 개발
        </p>
        <div className={styles.grid}>
          {technologies.map((tech, index) => (
            <div key={index} className={styles.tech}>
              <div className={styles.techName}>{tech.name}</div>
              <div className={styles.techCategory}>{tech.category}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
