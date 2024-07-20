import { useLocation } from "react-router-dom";
import styles from './footer.module.css'
import React from "react";

function Footer() {

    const location = useLocation()
    // console.log(location.pathname);
    return (
      <>
       <footer
           className={styles.footer}>
        footer
      </footer>
   </> 
   );
}
        export default Footer;