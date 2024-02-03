import React, { useState } from 'react'


function App() {
  const [name, setName] = useState('Helen')
  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={()=>setName('Ernest')}>Change Name</button>
    </div>
  )
}

export default App
