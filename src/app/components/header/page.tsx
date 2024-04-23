import Styles from '@/app/components/header/page.module.css';
import styled from 'styled-components';
import { GlobalStylesInstance } from '@/DATA/settings/Global';
import Navigator from './navigator/navigator';



const HeaderContainer = styled.header`
  background-color: ${ GlobalStylesInstance._colors.primary.DarkBlue.HEX};
`;


export default function Header() {


  const handleToggler = () => {
    const navUl = document.getElementById("nav_ul");
    const linksOfHeader = document.querySelectorAll('.header_link');
    if (navUl) navUl.classList.toggle('enabled');
    linksOfHeader.forEach((item) => item.classList.toggle('mobile_header_links'));
  };

  return (
    <HeaderContainer id='header' className={Styles.header}>
      <div>
       <h1>M</h1>
      </div>
      <ul className={Styles.nav_ul} id='nav_ul'>
        <Navigator linkId='/' text='Home' />
        <Navigator linkId='/about' text='About' />
        <Navigator linkId='/projects' text='Projects' />
        <Navigator linkId='/techniques' text='Resume' />
        <Navigator linkId='/contact' text='Contact' />
      </ul>
      {/* <BasicSwitches /> */}
      <button className={Styles.toggler_header} onClick={handleToggler}>T</button>
    </HeaderContainer>
  );
}
