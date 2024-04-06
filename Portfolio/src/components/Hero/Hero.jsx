
import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utlis";
export const Hero = () => {
  return( 
  <section className={styles.container}>
   <div className={styles.content}>
    <h1 className={styles.title}>Hello, I'm Sakshi</h1>
    <p className={styles.description}>I'm web devloper i have no experience dont reach out to me learn more!</p>
    <a href="mailto:jagtapsakshi75@gmail.com" className={styles.contactBtn}>Contact Me Girlies</a>
   </div>
   <img src={getImageUrl("hero/heroImage.png")} 
   alt="Hero image of me"
   className={styles.heroImg}/>
   <div className={styles.topBlur}/>
   <div className={styles.bottomBlur}/>
  </section>
    
  );
};
