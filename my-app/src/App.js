import React, { useState } from 'react'
import Footer from './Components/Footer/Footer'
import Header from './Components/Header/Header'

export default function App() {
  const [count, SetCount] = useState(0)
  const [isShow, SetIsShow] = useState(false)

  const UP = () => {
    SetCount(count + 1)
    SetCount(count + 1)

    SetCount(pre => pre + 1) //call_back 
    SetCount(pre => pre + 1)
  }

  const ShowOrHide = () => {
    SetIsShow(pre => !pre)
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={UP}>UP</button>
      <button onClick={ShowOrHide}>Show or hide</button>
      {isShow && <Header name="123" age={count} />}


      {/* <Header name="Thanh" /> */}
      {/* <h1>abc</h1>
      <h1>abc</h1>
      <Footer /> */}
    </div>
  )
}
