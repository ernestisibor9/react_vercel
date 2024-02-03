import React, { useState } from 'react'


function App() {
  const [name, setName] = useState('Helen')
  // Create a function to update the name variable
  function ali(){
    setName('Anthony')
  }
  return (
    <div>
      <h1>My name is {name}</h1>
      <button onClick={ali}>Change Name</button>
    </div>
  )
}

export default App
