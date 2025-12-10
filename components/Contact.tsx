'use client'

import { useState } from 'react'
import styles from './Contact.module.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 여기에 폼 제출 로직 추가
    console.log('Form submitted:', formData)
    alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className="container">
        <h2 className="section-title">문의하기</h2>
        <p className="section-subtitle">
          프로젝트 문의나 상담이 필요하시면 언제든지 연락주세요
        </p>
        <div className={styles.content}>
          <div className={styles.info}>
            <h3 className={styles.infoTitle}>연락처 정보</h3>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📧</div>
              <div>
                <div className={styles.infoLabel}>이메일</div>
                <div className={styles.infoValue}>
                  <a href="mailto:gurodnt@guromulsan.co.kr">gurodnt@guromulsan.co.kr</a>
                </div>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📞</div>
              <div>
                <div className={styles.infoLabel}>전화</div>
                <div className={styles.infoValue}>010-2684-4484</div>
              </div>
            </div>
            <div className={styles.infoItem}>
              <div className={styles.infoIcon}>📍</div>
              <div>
                <div className={styles.infoLabel}>주소</div>
                <div className={styles.infoValue}>서울특별시 강남구 개포로15길 3-4 1층 101호</div>
              </div>
            </div>
          </div>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">이름</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">이메일</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">전화번호</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">문의내용</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                required
              ></textarea>
            </div>
            <button type="submit" className={styles.submitButton}>
              문의하기
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
