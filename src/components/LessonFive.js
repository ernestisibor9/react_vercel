import React, { useState } from 'react'
import "./style/styles.css"

function LessonFive() {
    const[isLoggedIn, setIsLoggedIn] = useState(false)
    const [showBtn, setShowBtn] = useState(true)
    const [change, setChange] = useState(true)
  return (
    <div>
      {
        isLoggedIn && (<h1>WELCOME PETER</h1>)
      }
      <div>
        {
            showBtn ? 'Nigeria' : 'Ghana'
        }
      </div>
      <h1 className={change ? 'hello' : 'why'}>Hello world</h1>
      <button onClick={()=>setChange(!change)}>Toggle Class</button>
    </div>
  )
}

export default LessonFive
