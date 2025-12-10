'use client'

import { useState, useEffect } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const menuItems = [
    { label: '홈', href: '#home' },
    { label: '회사소개', href: '#about' },
    { label: '서비스', href: '#services' },
    { label: '기술스택', href: '#technologies' },
    { label: '문의하기', href: '#contact' },
  ]

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.logo}>
            <a href="#home">
              <img src="/images/GMlogo01.png" alt="구로물산 로고" className={styles.logoImage} />
              <span className={styles.logoText}>구로물산</span>
            </a>
          </div>
          <ul className={`${styles.menu} ${isMobileMenuOpen ? styles.open : ''}`}>
            {menuItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={styles.mobileToggle}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 토글"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </nav>
      </div>
    </header>
  )
}
