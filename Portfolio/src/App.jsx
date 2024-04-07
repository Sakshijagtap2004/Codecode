import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import {About} from "./components/About/About";
import { Hero } from "./components/Hero/Hero";
function App() {//hi
 

  return (// dcxvkdmledfmlsd
    <>
    <div className={styles.App}>
   <Navbar/>
   <Hero/>
   <About/>
   </div>
    </>
  )
}

export default App
