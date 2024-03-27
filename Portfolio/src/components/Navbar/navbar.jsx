import React from 'react'
import styles from "./navbar.module.css"
export const navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href = "/">Portfolio</a>
      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li> 
            <a href="#about">About</a>
          </li>
          <li> 
            <a href="#experience">Experience</a>
          </li>
          <li> 
            <a href="#project">Projects</a>
          </li>
          <li> 
            <a href="#contacts">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
    
  )
}
