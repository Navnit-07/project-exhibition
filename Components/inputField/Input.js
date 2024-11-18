import React from 'react'
import styles from './Input.module.css'

export default function Input({ type, placeholder, classNameInp, classNameImg, src }) {
  return (
    <div className={styles['section-div1']}>
      <input type={type} placeholder={placeholder} className={`${styles['search-input']} ${classNameInp || ''}`} />
      {src?(<img src={src} className={`${styles['section-img']} ${classNameImg || ''}`} />):(null)}
    </div>
  )
}
