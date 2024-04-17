
//TODO kept for future uses//import React, { ChangeEvent } from 'react';
// import Switch from '@mui/material/Switch';
// import styled from 'styled-components';
// import { GlobalStylesInstance } from '@/DATA/settings/Global';
// import { useDispatch, useSelector } from 'react-redux';
// import Styles from '../header/page.module.css';
// const label = { inputProps: { 'aria-label': 'Switch demo' } };

// const Switcher = styled.div`
//   width: 50px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// `;

// export default function BasicSwitches() {
//   const dispatch = useDispatch();

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     const newColor = event.target.checked ? 'black' : 'white';
//     GlobalStylesInstance.CurrentColor = newColor;
//   };

//   return (
//     <Switcher className={Styles.switcher} id='switcher'>
//       <Switch checked={true} {...label} onChange={handleChange} /> {true ? '☀️' : '🌛'}
//     </Switcher>
//   );
// }
