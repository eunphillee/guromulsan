'use client'

import { useEffect, useRef, useState } from 'react'
import styles from './Hero.module.css'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const audioRef = useRef<HTMLAudioElement>(null)
  const heroRef = useRef<HTMLElement>(null)
  const [isHeroVisible, setIsHeroVisible] = useState(true)

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

  // 배경 음악 재생 및 스크롤 감지
  useEffect(() => {
    const audio = audioRef.current
    const hero = heroRef.current

    if (!audio || !hero) return

    // 음악 파일 로드 확인
    const checkAudioFile = () => {
      return new Promise<boolean>((resolve) => {
        if (audio.readyState >= 2) {
          resolve(true)
          return
        }

        const handleCanPlay = () => {
          audio.removeEventListener('canplay', handleCanPlay)
          audio.removeEventListener('error', handleError)
          resolve(true)
        }

        const handleError = () => {
          audio.removeEventListener('canplay', handleCanPlay)
          audio.removeEventListener('error', handleError)
          console.warn('⚠️ 음악 파일을 찾을 수 없습니다.')
          console.log('📁 음악 파일 추가 방법:')
          console.log('   1. https://pixabay.com/music/ 접속')
          console.log('   2. "ambient technology" 검색')
          console.log('   3. 다운로드 후 파일명을 background-music.mp3로 변경')
          console.log('   4. public/audio/ 폴더에 저장')
          resolve(false)
        }

        audio.addEventListener('canplay', handleCanPlay)
        audio.addEventListener('error', handleError)

        // 2초 후 타임아웃
        setTimeout(() => {
          audio.removeEventListener('canplay', handleCanPlay)
          audio.removeEventListener('error', handleError)
          if (audio.readyState < 2) {
            console.warn('⚠️ 음악 파일 로드 타임아웃')
            console.log('📁 public/audio/background-music.mp3 파일을 추가해주세요.')
            resolve(false)
          } else {
            resolve(true)
          }
        }, 2000)
      })
    }

    const playAudio = async () => {
      try {
        const fileExists = await checkAudioFile()
        if (!fileExists) {
          return
        }

        audio.volume = 0.2 // 음량 조절 (20%)
        await audio.play()
        console.log('배경 음악 재생 시작')
      } catch (error) {
        // 브라우저 자동 재생 정책으로 인한 실패
        console.log('배경 음악 재생 대기 중 (사용자 상호작용 필요)')
        
        // 사용자 상호작용 후 재시도
        const handleFirstInteraction = async () => {
          const fileExists = await checkAudioFile()
          if (fileExists && audio.paused) {
            try {
              await audio.play()
              console.log('배경 음악 재생 시작 (사용자 상호작용 후)')
            } catch (e) {
              console.log('배경 음악 재생 실패')
            }
          }
          document.removeEventListener('click', handleFirstInteraction)
          document.removeEventListener('scroll', handleFirstInteraction)
          document.removeEventListener('touchstart', handleFirstInteraction)
        }
        
        document.addEventListener('click', handleFirstInteraction, { once: true })
        document.addEventListener('scroll', handleFirstInteraction, { once: true })
        document.addEventListener('touchstart', handleFirstInteraction, { once: true })
      }
    }

    // 스크롤 감지하여 Hero 섹션을 벗어나면 음악 멈춤
    const handleScroll = () => {
      if (!hero) return

      const heroRect = hero.getBoundingClientRect()
      const heroBottom = heroRect.bottom
      const isVisible = heroBottom > 0
      
      // Hero 섹션이 화면에서 벗어나면 음악 멈춤
      if (!isVisible && !audio.paused) {
        audio.pause()
        setIsHeroVisible(false)
        console.log('배경 음악 정지')
      } 
      // Hero 섹션이 다시 보이면 음악 재생
      else if (isVisible && audio.paused && !isHeroVisible) {
        setIsHeroVisible(true)
        playAudio()
      }
    }

    // 초기 재생 시도
    playAudio()

    // 스크롤 이벤트 리스너
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (audio) {
        audio.pause()
        audio.currentTime = 0
      }
    }
  }, [isHeroVisible])

  return (
    <section id="home" ref={heroRef} className={styles.hero}>
      {/* 배경 음악 */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
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
