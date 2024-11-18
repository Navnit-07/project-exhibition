import React from 'react'
import styles from './Button.module.css'

export default function Button({className, text}) {
  return (
    <button className={`${styles['button']} ${className || ''}`}>{text}</button>
  )
}
