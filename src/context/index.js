/*
import React, {useContext, useState} from 'react'
import {Context} from 'context'

const store = useContext(Context)

 */
import React, { useEffect, useState, createContext } from "react"

//Context
const Context = createContext()
const { Provider } = Context

//
const GlobalProvider = (props) => {
  //initalize

  //state
  //---------------------------------------------------------------------
  const [state, setState] = useState({})

  //---------------------------------------------------------------------
  const action = {
    //updateState
    updateState: (obj) => {
      setState((state) => ({ ...state, ...obj }))
    },
  }
  //---------------------------------------------------------------------
  const value = { state }
  return (
    <Provider value={value} action={action}>
      {props.children}
    </Provider>
  )
}
export { Context, GlobalProvider }
