import React from 'react'
import ReactDOM from 'react-dom/client'
import {jsx as _jsx} from "react/jsx-dev-runtime.js"
import App from './App.jsx'


// const ReactElement = {
//   type:'a',
//   props:{
//       href:'https.google.com',
//       target:'_blank'
//   },
//   children: 'Click me to visit google'
// }

const anotherUser = "chai aur react"
function MyApp(){
  return (
    <div>
      <h1>custom app</h1>
    </div>
  )
}

const ReactElement = React.createElement(
  'a',
  {href:'https://google.com',target:"_black"},
  'click me to visis google',
  anotherUser
)

const anotherElement = (
  <a href="https://google.com" target='_blanck'>visit gogle</a>
)

ReactDOM.createRoot(document.getElementById('root')).render(
     ReactElement
)

