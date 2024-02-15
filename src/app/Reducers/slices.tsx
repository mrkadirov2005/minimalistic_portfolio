import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface State {
  background: boolean;
  page: string;
}

export const initialState: State = {
  background: false,
  page: "home",
};

export const StateSlice=createSlice({
    name:"state_manager_slice",
    initialState,
    reducers:{
        set_page:(state,action)=>{
        state.page=action.payload
        },
        set_background:(state,action)=>{
          state.background=action.payload
        }
    }
})

export const {set_page,set_background}=StateSlice.actions
export default StateSlice.reducer



// export type Kinds = "set_background" | "set_page";

// interface Action {
//   type: Kinds;
//   payload: object |boolean | string; // Make payload optional
// }

// interface State {
//   background: boolean;
//   page: string;
// }

// export const initialState: State = {
//   background: false,
//   page: "home",
// };

// export default function stateReducer(state: State, action: Action) {
//   switch (action.type) {
//     case "set_background":
//       return {
//         ...state,
//         background: action.payload as boolean, // Assuming payload is boolean
//       };
//     case "set_page":
//       return {
//         ...state,
//         page: action.payload as string, // Assuming payload is string
//       };
//     default:
//       return state;
//   }
// }



// // type Kinds="set_background"|"set_page"

// // interface Action{
// //     type:Kinds,
// //     payload:object,
// // }

// // interface State{
// //     background:boolean,
// //     page:string

// // }
// // export const initialState:State={
// //     background:false,
// //     page:"home"
// // }


// // export default function stateReducer(state:State,action:Action){
// //     switch (action.type) {
// //         case "set_background":

// //             return {
// //                 ...state,
// //                 background:action.payload,
                
// //             }   
// //         case "set_page":
// //             return {
// //                 ...state,
// //                 page:action.payload,
// //             }
            
// //        default:
// //         return state
// //     }
// // }