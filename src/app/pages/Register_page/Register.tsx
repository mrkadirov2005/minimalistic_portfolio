import { GlobalStylesInstance } from "@/DATA/settings/Global";
import { Basics } from "@/app/Reducers/reducers";
import { set_error, set_isLoggedIn, set_isSigned, set_user } from "@/app/Reducers/slices";
import { Decode, STRtoCoded } from "@/app/components/format_pswrd/format_str";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";


const Wrapper=styled.section`
  background-color: ${(props)=>props.info.basics.background?GlobalStylesInstance._colors.primary.DarkBlue.HEX:GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
  display:flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  color: ${(props)=>props.info.basics.background?GlobalStylesInstance._p.dark.color:GlobalStylesInstance._p.light.color};
  width:100% ;
  height: 86.5vh;
  padding: 50px 0;
  margin: 0;
 `
const Register_container = styled.div`
    width: 100%;
    height: 94vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  `;
  const InputContainer=styled.div` 
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 0;
  `
  const Input=styled.input`
    width: 60%;
    height: 35px;
  `
  const Heading=styled.h1`
    margin: 0;
  `
 const Button=styled.button`
  width: 85px;
  height: 45px;
  margin-right: auto;
  margin-left: auto;
 `
 const Error=styled.span`
  color:orange;
  width: 60%;
  font-size: 25px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin:25px 0;
 `

const Switch_Register_BTN=styled.button`
width:auto;
height: 25px;
margin: 0px 15px;
background-color: transparent;
color: white;
border: none;
font-size: 20px;
text-decoration: underline;

`


export default function Register() {
  const info=useSelector(Basics)
  const dispatch=useDispatch()
  
let userDetails={
  name:"",
  email:"",
  password:"",
}


const localBase=localStorage.getItem("userDetails")
 const submitFunction=()=>{
  if(userDetails.name.length<2 || userDetails.email.length<5 || userDetails.password.length<6){
    dispatch(set_error(`entry requirements: name length:2  email length:5  password length:6, but got name: ${userDetails.name.length} email:${userDetails.email.length} password:${userDetails.password.length}`))
    return
  }
  dispatch(set_error(""))
  dispatch(set_user(userDetails))
  dispatch(set_isSigned(true))
  window.localStorage.setItem("userDetails",JSON.stringify(userDetails))
  const name=document.getElementById("name") as HTMLInputElement
 name.value=""
 const email=document.getElementById("email") as HTMLInputElement
 email.value=""
 const password=document.getElementById("password") as HTMLInputElement
 password.value=""

 }
 
 const checkIsLoggedINfN=()=>{
  
  const email=document.getElementById("email") as HTMLInputElement
  email.value=""
  const password=document.getElementById("password") as HTMLInputElement
  password.value=""

  const parsedBase=JSON.parse(localBase)
 if( Decode(parsedBase.password)==userDetails.password && Decode(parsedBase.email)==userDetails.email){

  dispatch(set_isLoggedIn(true))
}
else if(Decode(parsedBase.email)!==userDetails.email){
  dispatch(set_error("incorrrect email entered"))
} else if (Decode(parsedBase.password)!==userDetails.password){
  dispatch(set_error("incorrect password entered"))
}


 }
 
  const Registration= <Register_container info={info} >
      <InputContainer className="input_container">
        <label htmlFor="name">Full name:</label>
        <Input id="name" type="text" onChange={(e)=>userDetails.name=STRtoCoded(e.target.value)} required />
      </InputContainer>

      <InputContainer className="input_container">
        <label htmlFor="email">Email:</label>
        <Input id="email" type="email" onChange={(e)=>userDetails.email=STRtoCoded(e.target.value)} required />
      </InputContainer>

      <InputContainer className="input_container">
        <label htmlFor="password">Create a password:</label>
        <Input id="password" type="password" onChange={(e)=>userDetails.password=STRtoCoded(e.target.value)} required />
        
      </InputContainer>
      <Button  onClick={()=>submitFunction()}>Submit</Button>
      <Error>if you have  registered, click on  <Switch_Register_BTN onClick={()=>dispatch(set_isSigned(true))}>  log in</Switch_Register_BTN>  button.</Error>
    </Register_container>
  ;

 const LoginChecker= <Register_container info={info} >
  
  {/* <InputContainer className="input_container">
    <label htmlFor="name">Full name:</label>
    <Input id="name" type="text" onChange={(e)=>userDetails.name=e.target.value} required />
  </InputContainer> */}

  <InputContainer className="input_container">
    <label htmlFor="email">Email:</label>
    <Input id="email" type="email" onChange={(e)=>userDetails.email=e.target.value} required />
  </InputContainer>

  <InputContainer className="input_container">
    <label htmlFor="password">enter your password:</label>
    <Input id="password" type="password" onChange={(e)=>userDetails.password=e.target.value} required />
    
  </InputContainer>
  <Button  onClick={()=>checkIsLoggedINfN()}>register</Button>
  <Error>if you have not registered, click on  <Switch_Register_BTN onClick={()=>dispatch(set_isSigned(false))}>  sign up </Switch_Register_BTN>  button.</Error>
</Register_container>


return <Wrapper info={info}>
<Heading style={GlobalStylesInstance._H1}>Welcome to the {info.basics.isSigned?"login":"register"} page of the portfolio by <br /> @mr_kadirov101</Heading>
<Error >{info.basics.error}</Error>
 { info.basics.isSigned?LoginChecker:Registration}

</Wrapper>

}
