import React from 'react'
import img1 from '../../assets/hive2.png'
import styles from './Headers.module.css'

const Headers = () => {
  return (
    <div>
        <img className={styles.container} src={img1} />
    </div>
  )
}

export default Headers