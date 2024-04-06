import React, {useState} from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utlis";
export const Navbar = () => {
  const [menuOpen, setMenuopen] = useState(false);
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href = "/">
        Portfolio
        </a>
      <div className={styles.menu}>
        <img 
        className={styles.menubtn} 
        src={
          menuOpen 
          ? getImageUrl("nav/menuIcon.png")
          : getImageUrl("nav/closeIcon.png")
        } 
        alt="menu-button"
        onClick={() => setMenuopen(!menuOpen)}
        />
        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
        onClick={()=>setMenuopen(false)}>
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
