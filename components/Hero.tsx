'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const playVideo = async () => {
        try {
          await video.play()
          console.log('비디오 재생 성공')
        } catch (error) {
          console.error('비디오 재생 실패:', error)
          // 사용자 상호작용 후 재시도
          document.addEventListener('click', () => {
            video.play().catch(console.error)
          }, { once: true })
        }
      }
      
      video.addEventListener('loadeddata', playVideo)
      playVideo()
      
      return () => {
        video.removeEventListener('loadeddata', playVideo)
      }
    }
  }, [])

  return (
    <section id="home" className={styles.hero}>
      <video
        ref={videoRef}
        className={styles.backgroundVideo}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
      >
        <source src="/videos/AdobeStock_74111339.mov" type="video/quicktime" />
        <source src="/videos/AdobeStock_74111339.mov" type="video/mp4" />
        비디오를 재생할 수 없습니다.
      </video>
      <div className={styles.contentWrapper}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            디지털임베디드 개발의
            <br />
            <span className={styles.highlight}>전문 파트너</span>
          </h1>
          <p className={styles.description}>
            구로물산은 최신 기술과 전문성을 바탕으로
            <br />
            고객의 비즈니스 성장을 지원합니다.
          </p>
          <div className={styles.buttons}>
            <a href="#contact" className={styles.primaryButton}>
              문의하기
            </a>
            <a href="#services" className={styles.secondaryButton}>
              서비스 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
