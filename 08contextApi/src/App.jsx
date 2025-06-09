import React from 'react'
import { useState } from 'react'
import Profile from './context/Profile'
import UserContextProvider from './context/UserContextProvider'
import Login from './context/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
     <h1>React with Chai and share is equally important</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
