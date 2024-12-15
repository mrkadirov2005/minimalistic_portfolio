"use client"
import { useState } from 'react';
import Styles from './page.module.css';
import Link from 'next/link';

export default function Header() {
  const handleChangeColor = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const target = e.target as HTMLButtonElement;
    document.body.style.backgroundColor = target.value;
  };

  const [state, setState] = useState<boolean>(false);

  return (
    <header id='header' className={Styles.header}>
      <div>
        <h1 className={Styles.header_M_logo}>M</h1>
      </div>
      <ul className={Styles.nav_ul} id='nav_ul'>
        <Link className='header_link' style={{ color: "white", textDecoration: "none" }} href='/' >Home</Link>
        <Link className='header_link' style={{ color: "white", textDecoration: "none" }} href='/about' >about</Link>
        <Link className='header_link' style={{ color: "white", textDecoration: "none" }} href='/projects' >projects</Link>
        <Link className='header_link' style={{ color: "white", textDecoration: "none" }} href='/techniques' >techniques</Link>
        <Link className='header_link' style={{ color: "white", textDecoration: "none" }} href='/contact' >contact</Link>
      </ul>

      <ul className={!state ? Styles['responsive_mobile_dis'] : Styles['responsive_mobile']} id='responsive_mobile'>
        <Link className='responsive_header_link' style={{ color: "white", textDecoration: "none", fontSize: !state ? 0 : "18px" }} href='/' >Home</Link>
        <Link className='responsive_header_link' style={{ color: "white", textDecoration: "none", fontSize: !state ? 0 : "18px" }} href='/about' >about</Link>
        <Link className='responsive_header_link' style={{ color: "white", textDecoration: "none", fontSize: !state ? 0 : "18px" }} href='/projects' >projects</Link>
        <Link className='responsive_header_link' style={{ color: "white", textDecoration: "none", fontSize: !state ? 0 : "18px" }} href='/techniques' >techniques</Link>
        <Link className='responsive_header_link' style={{ color: "white", textDecoration: "none", fontSize: !state ? 0 : "18px" }} href='/contact' >contact</Link>
      </ul>
      
      <div className={Styles.background_setter}>background
        <div className={Styles.background_inner}>
          <button value={"black"} className={Styles.color_button} onClick={(e) => handleChangeColor(e)}>black</button>
          <button value={"purple"} className={Styles.color_button} onClick={(e) => handleChangeColor(e)}>purple</button>
          <button value={"green"} className={Styles.color_button} onClick={(e) => handleChangeColor(e)}>green</button>
          <button value={"blue"} className={Styles.color_button} onClick={(e) => handleChangeColor(e)}>blue</button>
          <button value={"darkblue"} className={Styles.color_button} onClick={(e) => handleChangeColor(e)}>darkblue</button>
          <button value={"orange"} className={Styles.color_button} onClick={(e) => handleChangeColor(e)}>orange</button>
          <button value={"grey"} className={Styles.color_button} onClick={(e) => handleChangeColor(e)}>grey</button>
        </div>
      </div>
      
      <button className={Styles.toggler_header} onClick={() => setState(!state)}>{state ? "X" : "D"}</button>
    </header>
  );
}
