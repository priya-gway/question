import React, { useState } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

const SingleQuestion = ({id,isactive,toggleQuestion,title,info}) => {
    // const[showInfo,setShowInfo] = useState(false)
    const activeId = id === isactive
  return (
   <article className="question">
    <header>
        <h5>{title}</h5>
        <button
         className="question-btn" 
        onClick={()=>toggleQuestion(id)}>
           {activeId?<AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
    </header>
    {activeId && <p>{info}</p>}
    

   </article>
  )
}

export default SingleQuestion