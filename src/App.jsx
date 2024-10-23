import React, { useState } from 'react'
import Questions from './Questions'
 import data from './data'

const App = () => {
  const [questions,setQuestions] = useState(data);
  const [isactive,setIsActive] = useState(null)
  const toggleQuestion = (id) =>{
    const newActive = id === isactive ? null : id;
    setIsActive(newActive)
  }
  return (
    <main>
      <Questions 
      questions={questions} 
      isactive={isactive}
      toggleQuestion={toggleQuestion}
      />
       </main>
  )
}

export default App
