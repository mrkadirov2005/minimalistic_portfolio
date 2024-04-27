"use client"
import Styles from './page.module.css';
import Link from 'next/link';
export default function Header() {


  const handleToggler = () => {
    const navUl = document.getElementById("nav_ul");
    const linksOfHeader = document.querySelectorAll('.header_link');
    if (navUl) navUl.classList.toggle('enabled');
    linksOfHeader.forEach((item) => item.classList.toggle('mobile_header_links'));
  };

  return (
    <header id='header' className={Styles.header}>
      <div>
       <h1>M</h1>
      </div>
      <ul className={Styles.nav_ul} id='nav_ul'>
        <Link style={{color:"white",textDecoration: "none"}} href='/' >Home</Link>
        <Link style={{color:"white",textDecoration: "none"}} href='/about' >about</Link>
        <Link style={{color:"white",textDecoration: "none"}} href='/projects' >projects</Link>
        <Link style={{color:"white",textDecoration: "none"}} href='/techniques' >techniques</Link>
        <Link style={{color:"white",textDecoration: "none"}} href='/contact' >contact</Link>
      </ul>
      <button className={Styles.toggler_header} onClick={handleToggler}>T</button>
    </header>
  );
}
