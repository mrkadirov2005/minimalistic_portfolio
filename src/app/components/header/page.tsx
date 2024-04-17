import Styles from '@/app/components/header/page.module.css';
import { Link, useNavigate } from "react-router-dom";
import BasicSwitches from '../comp/toggler';
import styled from 'styled-components';
import { GlobalStylesInstance } from '@/DATA/settings/Global';
import { background } from '@/app/Reducers/selector';
import Navigator from './navigator/navigator';
import { useSelector } from 'react-redux';

interface LocalProps {
  background: boolean;
}

const HeaderContainer = styled.header<LocalProps>`
  background-color: ${(props) => props.background ? GlobalStylesInstance._colors.primary.DarkBlue.HEX : GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
`;


export default function Header() {

  const info = useSelector(background);
  const navigate = useNavigate();

  const handleToggler = () => {
    const navUl = document.getElementById("nav_ul");
    const linksOfHeader = document.querySelectorAll('.header_link');
    if (navUl) navUl.classList.toggle('enabled');
    linksOfHeader.forEach((item) => item.classList.toggle('mobile_header_links'));
  };

  return (
    <HeaderContainer background={info} id='header' className={Styles.header}>
      <div>
        <button>🔼</button>
        <button>🔽</button>
      </div>
      <ul className={Styles.nav_ul} id='nav_ul'>
        <Navigator linkId='/' text='Home' />
        <Navigator linkId='/about' text='About' />
        <Navigator linkId='/projects' text='Projects' />
        <Navigator linkId='/techniques' text='Resume' />
        <Navigator linkId='/contact' text='Contact' />
      </ul>
      <BasicSwitches />
      <button className={Styles.toggler_header} onClick={handleToggler}>T</button>
    </HeaderContainer>
  );
}
