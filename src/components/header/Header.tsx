import { Link, useLocation } from "react-router-dom";
import styles from './header.module.css'


function Header() {
    const location = useLocation()
    // console.log(location.pathname);
    return (
      <>
        <header className={styles.header}>
        <Link className={location.pathname === '/' ? styles.active : ''} to={'/'}></Link>
          <Link className={location.pathname === '/' ? styles.active : ''} to={'/'}>HomePage 🏡</Link>
          <Link className={location.pathname === '/random-fox' ? styles.active : ''} to={'/random-fox'}>random fox</Link>
          <Link className={location.pathname === '/star-wars-gallery' ? styles.active : ''} to={'/star-wars-gallery'}>star wars gallery</Link>
          <Link className={location.pathname === '/gender-form' ? styles.active : ''} to={'/gender-form'}>gender form</Link>
          <Link className={location.pathname === '/my-form' ? styles.active : ''} to={'/my-form'}>my form</Link>
          <Link className={location.pathname === '/robot-form' ? styles.active : ''} to={'/robot-form'}>robot form</Link>
        </header>
       
      </>
    );
  }
  
  export default Header;