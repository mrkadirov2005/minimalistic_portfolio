import { configureStore } from "@reduxjs/toolkit";
import  StateReducer  from "./slices";




export const  Basicstore=configureStore({
  reducer:{
    basics:StateReducer
  },

})

export type RootState = ReturnType<typeof Basicstore.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export const Basics=(state:RootState)=>state
export type AppDispatch = typeof Basicstore.dispatch