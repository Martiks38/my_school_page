import React from 'react'
import styles from './main.module.css'

function Main({ children }) {
  return (
    <>
      <div className={styles.fondo}>
        <img
          src="escuela.webp"
          alt="Foto de la escuela"
          loading="eager"
          className={styles.img}
        />
      </div>
      <main className={styles.main}>{children}</main>
    </>
  )
}

export default Main
