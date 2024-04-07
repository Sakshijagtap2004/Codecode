import React from "react";
import { getImageUrl } from "../../utlis";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
    <h1 className={styles.title}>
      About
    </h1>
    <div className={styles.content}>
      <img 
      src ={getImageUrl("about/aboutImage.png")} 
      alt="about section image"
      className={styles.aboutImage}
/>
    <ul className={styles.aboutItems}>
      <li className={styles.aboutItems}>
        <img 
        className={styles.aboutImage}
        src = {getImageUrl("about/cursorIcon.png")} alt = "Cursor icon"/>
        <div className={styles.aboutItemsText}>
          <h2>Frontend Developer</h2>
          <p>
            I'm frontend developer with no experience
          </p>
        </div>
      </li>
      <li className={styles.aboutItems}>
        <img src = {getImageUrl("about/serverIcon.png")} alt = "servericon"/>
        <div className={styles.aboutItemsText}>
          <h2>Backend Developer</h2>
          <p>
            I'm Backend developer with no experience
          </p>
        </div>
      </li>
      <li className={styles.aboutItems}>
        <img src = {getImageUrl("about/uiIcon.png")} alt = "Cursor icon"/>
        <div className={styles.aboutItemsText}>
          <h2>UI Developer</h2>
          <p>
            I'm UI developer with no experience
          </p>
        </div>
      </li>
    </ul>
    </div>
    </section>
  )
}
