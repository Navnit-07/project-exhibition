import React from 'react'
import Input from '../inputField/Input'
import styles from './FindLocation.module.css'
import DestinationImg from '../../Assets/destination.png'
import CurrLocImg from '../../Assets/hollow-circle-png.png'
import Button from '../button/Button'

export default function FindLocation() {
    return (
        <>
            <div className={styles['find-loc']}>
                <div className={styles['find-loc-inner']}>
                    <Input type='text' placeholder='Current Location' src={CurrLocImg} classNameInp={styles['curr-loc']} />
                    <Input type='text' placeholder='Destination' src={DestinationImg} classNameInp={styles['dest-loc']} />
                    <Button text='Find'/>
                </div>
            </div>
        </>
    )
}
