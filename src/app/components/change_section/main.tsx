import { GlobalStylesInstance } from '@/DATA/settings/Global'
import { RootState } from '@/app/Reducers/reducers'
import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

interface PROPS{
    section_number:number,
    update_section: React.Dispatch<React.SetStateAction<number>>,
    type:string,
}

const Button=styled.button`
background-color: ${(props)=>props.background==true?GlobalStylesInstance._colors.secondary.veryLightGrey_BG.HEX:GlobalStylesInstance._colors.primary.slightlyDesaturatedCyan.HEX};
width:176px;
height:48px;
border: 2px solid grey;
align-items: center;
display: flex;
align-items: center;
justify-content: center;
color:${(props)=>props.background==true?"black":"black"};
cursor: pointer;
`

export default function ChangeSectionBtn({section_number:number,update_section:updater,type:type}:PROPS) {

    const info=useSelector((state:RootState)=>state)
    const background=info.basics.background
   
    const handleData=():void=>{
        console.log(number)
        if(!type){
            console.log("no type defined")
        }else if(number<0){
            console.log("indicator can not be less than 0")
        }
      else  if(type=="+"){
            updater(number+1)
        }else if(type=="-"){
            updater(number-1)
        }else if(type=="s+1"){
            updater(number+1)

        }
        else if(type=="s-1"){
            updater(number-1)
        }
    }
  return (
    <Button background={background}   onClick={()=>handleData()}>
    {type=="+"?"Next Section":(type=="-")?"previous Section":(type=="s+1")?"next semester":(type=="s-1")?"previous semester": ""}
    </Button>
  )
}
