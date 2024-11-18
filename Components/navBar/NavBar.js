import React from 'react'
import styles from './NavBar.module.css'
import logo from '../../Assets/logo.png'
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    // const navElements = ['Home', 'Find Location', 'Login']
    const navElements = [
        { name: 'Home', path: '/' },
        { name: 'Find Location', path: '/find-dest' },
        { name: 'Login', path: '/login' },
      ];
    return (
        <>
            <div className={styles['nav-bar']}>
                <div className={styles.logo}>
                    <img src={logo} alt="logo" />
                </div>
                {/* <ul>
                    {navElements.map((element, id) =>
                        <li key={id}>{element}</li>
                    )}
                </ul> */}
                <ul>
                    {navElements.map((element, id) => (
                        <li key={id}>
                            <NavLink
                                to={element.path}
                                className={({ isActive }) =>
                                    isActive ? styles['active-link'] : styles['inactive-link']
                                }
                            >
                                {element.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}
