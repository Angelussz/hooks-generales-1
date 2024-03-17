import React, { useState } from 'react'
import { userContext } from './UserContext'
// const user = {
//     id:123,
//     name:"angelo perez",
//     email:"angelo@gmail.com"
// }
export const UserProvider = ({children}) => {
  const [user, setUser] = useState()
  return (
    <userContext.Provider value={{user,setUser}}>
        {children}
    </userContext.Provider>
  )
}
