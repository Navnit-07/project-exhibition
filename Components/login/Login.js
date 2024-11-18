import React from 'react'
import styles from './Login.module.css'
import Input from '../inputField/Input'
import Button from '../button/Button'
import PersonImg from '../../Assets/person.png'
export default function Login() {
  return (
    <>
        <div className={styles['login-container']}>
            <Input type='text' placeholder='Enter username/email' src={PersonImg}/>
            <Input type='password' placeholder='Enter password' src='' />
            <Button text='Log In'/>
        </div>
    </>
  )
}
