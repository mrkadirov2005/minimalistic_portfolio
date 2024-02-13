
interface Global{
    colors:object | object[] | string,
    font:object | object[] | string,
    H1:object | object[] | string,
    H2:object | object[] | string,
    H3:object | object[] | string,
    CurrentColor:string,
    p:object,
    initial:boolean,
    // buttons:object,
    // TextArea:object,

}

export default class GlobalStyles implements Global{
    constructor(
        public _colors:{
            primary:{
                slightlyDesaturatedCyan:{
                    HEX:string,
                    RGB:string,
                    HSL:string
        },
                DarkBlue:{
                    HEX:string,
                    RGB:string,
                    HSL:string
                },
                GrayishDarkBlue:{
                    HEX:string,
                    RGB:string,
                    HSL:string
        },
    },
            secondary:{
                veryLightGrey_BG:{
                    HEX:string,
                    RGB:string,
                    HSL:string
                    
                },
                LightGrey_Text_Field:{
                    HEX:string,
                    RGB:string,
                    HSL:string
                    
                },
                BrightRed_Errors:{
                    HEX:string,
                    RGB:string,
                    HSL:string
                    
                }
            }
        },
        public _font={primary:"Ibarra Real Nova",secondary:"Public Sans"},
         public _H1:{
        fontFamily: string,
        fontWeight: string,
        fontSize:string,

        },
        public _H2:{
            fontFamily: string
            fontWeight: string,
            fontSize: string,
        },
        public _H3:{
            fontFamily: string,
            fontWeight: string,
            fontSize: string,
        },
        public _CurrentColor:string,
        public _p:{
            light:{
                fontSize: string,
                color: string,
            },
            dark:{
                fontSize: string,
                color: string,
            },
            
        },
        public _initial:boolean
       
    ){


    }
   
   

    get colors():object{
        return this._colors
    }

    get font():object{
        return this._font
    }
    get H1():object{
        return this._H1
    }
    get H2():object{
        return this._H2
    }
    get H3():object{
        return this._H3
    }
    get CurrentColor():string{
        return this._CurrentColor
    }
    set CurrentColor(value:string){
        this._CurrentColor=value
        
    }
    
    get p():object{
        return this._p
    }
    get initial():boolean{
        return this._initial
    }
   
}



const _colors={
    primary:{
        slightlyDesaturatedCyan:{
            HEX:"#5FB4A2",
            RGB:"rgb(95,180,162)",
            HSL:"hsl(167,136%,54%)"
},
        DarkBlue:{
            HEX:"#203A4C",
            RGB:"rgb(38,58,76)",
            HSL:"hsl(205,41%,21%)"
        },
        GrayishDarkBlue:{
            HEX:"#33323D",
            RGB:"rgb(51,60,61)",
            HSL:"hsl(245,10%,22%)"
},
},
    secondary:{
        veryLightGrey_BG:{
            HEX:"#FAFAFA",
            RGB:"rgb(250,250,250)",
            HSL:"hsl(0,0,98%)"
            
        },
        LightGrey_Text_Field:{
            HEX:"#EAEAEB",
            RGB:"rgb(234,234,235)",
            HSL:"hsl(240,2,92%)"
            
        },
        BrightRed_Errors:{
            HEX:"#FAFAFA",
            RGB:"rgb(250,250,250)",
            HSL:"hsl(0,0,98%)"
            
        }
    }
}



const  _font={primary:"Ibarra Real Nova",secondary:"Public Sans"}
const _H1={
    fontFamily: "Ibarra Real Nova",
    fontWeight: 'bold',
    fontSize: "50px",
    // color:``
    

    }
    const _H2={
        fontFamily: "Ibarra Real Nova",
        fontWeight: 'bold',
        fontSize: "40px",
    }
    const _H3={
        fontFamily: "Ibarra Real Nova",
        fontWeight: 'regular',
        fontSize: "32px",
    }
    const _CurrentColor="white"
    const _p={
        light:{
            fontSize: "15px",
            color: "black"
        },
        dark:{
            fontSize: "15px",
            color: "white"
        }
    };
    const _initial=false



    


   
export const GlobalStylesInstance=new GlobalStyles(_colors,_font,_H1,_H2,_H3,_CurrentColor,_p,_initial)
