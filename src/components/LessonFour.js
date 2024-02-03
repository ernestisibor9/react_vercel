import React, { useState } from 'react'

function LessonFour() {
    const[color, setColor] = useState('white')
    const[bgcolor, setBgColor] = useState('blue')
    const[padding, setPadding] = useState('20px')
    const[fontsize, setFontSize] = useState('70px')
    const[show, setShow] = useState(false)

  return (
    <div>
      {
        show && (
                    <>
                        <h4 style={{fontSize: fontsize, color: color, backgroundColor: bgcolor, padding: padding}}>Welcome to Alabian Solutions</h4>
                        <button onClick={()=>setColor('yellow')}>Update Color</button>
                    </>
                )
      }
      <button onClick={()=>setShow(!show)}>SHOW ALABIAN</button>
    </div>
  )
}

export default LessonFour
