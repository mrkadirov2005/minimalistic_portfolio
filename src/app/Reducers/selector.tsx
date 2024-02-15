import React from 'react'
import {rootState} from "./reducers"
export default function selector() {
  return (
    <div>selector</div>
  )
}
export const Basics=(state:rootState)=>state
