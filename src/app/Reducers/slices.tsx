// import { createSlice } from "@reduxjs/toolkit";
// import Data from "../pages/Projects/ProjectsComp/data";
// import { Navigate } from "react-router-dom";

// interface State {
//   background: boolean;
//   page: string;
//   data:object | object[];
//   isSigned:boolean,
//   user:{
//     name:string,
//     email:string,
//     password:string | number,
//   },
//   isLoggedIn:boolean,
//   error:string

// }

// export const initialState: State = {
//   background: true,
//   page: "home",
//   data:Data,
//   isSigned:false,
//   user:{
//     name:"",
//     email:"",
//     password:0,
//   },
//   isLoggedIn:false,
//   error:""
// };

// export const StateSlice=createSlice({
//     name:"state_manager_slice",
//     initialState,
//     reducers:{
//         set_page:(state,action)=>{
//         // no code here, kept for future use
//         },
//         set_background:(state,action)=>{
//           state.background=action.payload
//         },
//         set_isSigned:(state,action)=>{
//           state.isSigned=!state.isSigned
//         },
//         set_user:(state,action)=>{
//           state.user=action.payload
//         },
//         set_isLoggedIn:(state,action)=>{
//           state.isLoggedIn=action.payload
//           localStorage.setItem("isLoggedIn",JSON.stringify(true))
//         },
//         set_error:(state,action)=>{
//           state.error=action.payload
//         }
//     }
// })



// export const {set_page,set_background,set_isSigned,set_user,set_isLoggedIn,set_error}=StateSlice.actions
// export default StateSlice.reducer

