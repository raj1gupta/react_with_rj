import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
function MyApp(){
  return(
    <div>
      <h1>Custom App</h1>
    </div>
  )
}

const anotherElement = (
  <a href="https://google.com" target= '_blank' >Visit Google</a>
)

// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://google.com',
//         target: '_blank'
//     },
//     children: 'Click me to visit google'
//  }    Not allowed by react

const anotherUser = "Chai aur react"
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target:'_blank'},
    'click me to visit google',
    anotherUser
)
createRoot(document.getElementById('root')).render(
 
    // <MyApp />
    // anotherElement
    reactElement
  
)
