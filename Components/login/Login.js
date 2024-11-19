import React from 'react'
import styles from './Login.module.css'
import Input from '../inputField/Input'
import Button from '../button/Button'
import PersonImg from '../../Assets/person.png'
import ShowImg from '../../Assets/show-pass.png'
import HideImg from '../../Assets/hide-pass.png'
export default function Login() {
  return (
    <>
        <div className={styles['login-container']}>
            <Input type='text' placeholder='Enter username/email' src={PersonImg}/>
            <Input type='password' placeholder='Enter password' srcDisplay={ShowImg} srcHide={HideImg} showHide={true} src={true}/>
            <Button text='Log In'/>
        </div>
    </>
  )
}
