'use client'

import { useEffect, useRef } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const heroRef = useRef<HTMLElement>(null)

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

  // 배경 음악: 자동 재생하지 않고, 첫 화면(Hero)을 클릭했을 때만 재생/정지
  // - 스크롤로는 재생되지 않음
  // - 첫 화면을 벗어나면 정지 (다시 돌아와도 자동 재생 안 함)
  useEffect(() => {
    const audio = audioRef.current
    const hero = heroRef.current
    if (!audio || !hero) return

    audio.volume = 0.2

    const handleHeroClick = (e: MouseEvent) => {
      // 문의하기·서비스 보기 등 링크/버튼 클릭은 음악 제어에서 제외
      if ((e.target as HTMLElement).closest('a, button')) return
      if (audio.paused) {
        audio.play().catch(() => {})
      } else {
        audio.pause()
      }
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting && !audio.paused) audio.pause()
      },
      { threshold: 0 }
    )

    hero.addEventListener('click', handleHeroClick)
    observer.observe(hero)

    return () => {
      hero.removeEventListener('click', handleHeroClick)
      observer.disconnect()
      audio.pause()
    }
  }, [])

  return (
    <section id="home" ref={heroRef} className={styles.hero}>
      {/* 배경 음악 */}
      <audio
        ref={audioRef}
        loop
        preload="none"
        style={{ display: 'none' }}
      >
        <source src="/audio/background-music.mp3" type="audio/mpeg" />
        <source src="/audio/background-music.ogg" type="audio/ogg" />
        <source src="/audio/background-music.wav" type="audio/wav" />
        배경 음악을 재생할 수 없습니다.
      </audio>
      
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
        <source src="/videos/hero.mp4" type="video/mp4" />
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
