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
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Web3Forms를 사용한 자동 이메일 전송
      const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || 'b2dbb3dc-3bf7-4c84-81ec-f3652390a50b'
      
      const formDataToSend = new FormData()
      formDataToSend.append('access_key', accessKey)
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone || '')
      formDataToSend.append('message', `이름: ${formData.name}\n이메일: ${formData.email}\n전화번호: ${formData.phone || '없음'}\n\n문의내용:\n${formData.message}`)
      formDataToSend.append('subject', `[구로물산] 문의하기 - ${formData.name}`)
      formDataToSend.append('to', 'gurodnt@guromulsan.co.kr')
      
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.')
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        throw new Error(result.message || '이메일 전송에 실패했습니다.')
      }
    } catch (error) {
      console.error('이메일 전송 실패:', error)
      setSubmitStatus('error')
      alert('문의 전송에 실패했습니다. 잠시 후 다시 시도해주세요.')
    } finally {
      setIsSubmitting(false)
    }
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
                <div className={styles.infoValue}>경기도 광명시 소하로 190, B동 705호(소하동, 광명G타워)</div>
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
            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? '전송 중...' : '문의하기'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
