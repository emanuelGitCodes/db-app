import React from 'react'
import { createContext, useReducer, FC } from 'react'

interface IUserData {
  logIn: boolean,
  userName: string,
  firstName: string,
  lastName: string,
  userID: number,
  checkingEvent: number,
}

interface IContextType {
  state: IUserData,
  dispatch: React.Dispatch<{type: string, value: unknown}>
}

const userData: IUserData = {
  logIn: false,
  userName: '',
  firstName: '',
  lastName: '',
  userID: 0,
  checkingEvent: 0,
}

const store = createContext<IContextType | null>(null)
const { Provider } = store

const AppState:FC<any> = ({children}) => {

  const [state, dispatch] = useReducer((state: any, action: {type: string, value: any}) => {

    switch (action.type) {
      case 'update_log_in':
        return {...state, logIn: !userData.logIn}

      case 'update_user':
        return {
          ...state,
          userName: action.value.userName,
          firstName: action.value.firstName,
          lastName: action.value.lastName,
          userId: action.value.userId,
          logIn: true
        }

      case 'checking_event':
        return { ...state, checkingEvent: action.value.checkingEvent }

      default:
        throw new Error(`Base reducer: action type: [ ${action.type} ] not found.`)
    }

  }, userData)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { store, AppState }