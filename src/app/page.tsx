"use client"
import { useEffect, useReducer } from "react";
import Layout from "./Layout/page";
// import reducer, { initialState } from "./Reducers/reducers"
import { Provider } from "react-redux";
import { Basicstore } from "./Reducers/reducers";
export default function Home() {
 
  // const [state,dispatch]=useReducer(reducer,initialState)
  // useEffect(() => {
  //   dispatch({type:"set_page",payload:"home"})
    
  // }, [])


    return <Provider store={Basicstore} >
    <Layout  />
      </Provider>
}
