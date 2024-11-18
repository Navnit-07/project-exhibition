import React from 'react'
import NavBar from '../navBar/NavBar'
import styles from './Home.module.css'
import SearchIcon from '../../Assets/search-icon.png'
import Input from '../inputField/Input'

export default function Home() {
    return (
        <>
            <div className={styles['hero-section']}>
                <div className={styles['hero-section-container']}>
                    <div className={styles['hero-section-div2']}>
                        <p><span>Navigate</span> your way through VIT Bhopal with ease. Explore every
                            corner of the campus effortlessly with our smart guide!</p>
                    </div>
                    <div className={styles['hero-section-div1']}>
                        <Input type='text' placeholder='Search Here' src={SearchIcon} classNameInp={styles['hero-section-search']} />
                        {/* <img src={SearchIcon} className={styles['hero-section-img']} /> */}
                    </div>
                </div>
            </div>
        </>
    )
}
