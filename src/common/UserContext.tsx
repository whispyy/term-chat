import React, { useState, useMemo, createContext } from 'react'
import { User } from './models/user'
import { Conversation } from './models/conversation'

interface UserContext {
  user: User|undefined
  setUser: (u?: User) => void
  activeConversation: Conversation|undefined
  setActiveConversation: (c?: Conversation) => void
}

export const UserContext = createContext<UserContext>({
  user: undefined,
  setUser: () => {},
  activeConversation: undefined,
  setActiveConversation: () => {}
})

export default function UserProvider({ children }) {
  const cookie = 'A_COOKIE' // getCookie
  // call to retrieve userinfo
  const [user, setUser] = useState<User|undefined>({
    _id: cookie,
    phoneNumber: '123'
  })
  const [activeConversation, setActiveConversation] = useState<Conversation|undefined>()

  const value = useMemo(
    () => ({
      user,
      setUser,
      activeConversation,
      setActiveConversation,
    }), 
    [user, setUser, activeConversation, setActiveConversation]
  )
  
  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  )
}
