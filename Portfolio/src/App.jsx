import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
function App() {//hi
 

  return (//hii hekkoo
    <>
    <div className={styles.App}>
   <Navbar/>
   <Hero/>
   </div>
    </>
  )
}

export default App
