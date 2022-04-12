import React from 'react'
import { useState, createContext, useReducer, FC } from 'react'

interface IUserData {
  logIn: boolean,
  userName: string,
  firstName: string,
  last_name: string
}

interface IContextType {
  state: IUserData,
  dispatch: React.Dispatch<{type: string, value: unknown}>
}

const userData: IUserData = {
  logIn: false,
  userName: '',
  firstName: '',
  last_name: ''
}

const store = createContext<IContextType | null>(null)
const { Provider } = store

const AppState:FC<any> = ({children}) => {

  const [state, dispatch] = useReducer((state: any, action: {type: string, value: any}) => {

    switch (action.type) {
      case 'update_log_in':
        return {...state, logIn: !userData.logIn}

      default:
        throw new Error(`Base reducer: action type: [ ${action.type} ] not found.`)
    }

  }, userData)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, AppState }