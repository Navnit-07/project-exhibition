import React, { useState } from 'react'
import styles from './Input.module.css'

export default function Input({ type, 
                                placeholder, 
                                classNameInp, 
                                classNameImg, 
                                src, 
                                srcDisplay, 
                                srcHide, 
                                showHide
}) {

    const [displayPass, setDisplayPass] = useState(false)

    const toggleDisplay = () => {
      setDisplayPass((prev) => !prev)
    }

    const Type = !displayPass && type === 'password'? 'password' : 'text'

    const source = (displayPass ? (srcHide) : (srcDisplay))

    return (
      <div className={styles['section-div1']}>

        <input 
              type={Type} 
              placeholder={placeholder} 
              className={`${styles['search-input']} ${classNameInp || ''}`} 
        />

        {src ? (

          <img 
              src={(Type === 'password' ? (source) : (showHide? source : src))} 
              className={`${styles['section-img']} ${classNameImg || ''}`}
              onClick={showHide ? (toggleDisplay) : (null)} 
          />)

        : (null)}
      </div>
    )
}