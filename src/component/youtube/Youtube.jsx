import React from 'react'
import styles from './Youtube.module.css'
const Youtube = () => {
  return (
    <div className={styles.container}>
        <iframe width="420" height="315"
            src="https://www.youtube.com/embed/THqh0k-9JdY">
        </iframe>
    </div>
  )
}

export default Youtube