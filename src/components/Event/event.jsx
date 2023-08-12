import React from 'react'

const event = (props) => {
   
    
  return (
    <>
      <div>{props.passedDate}</div>
      <h1>{props.passedTitle}</h1>
      <h3>{props.passedAmount}</h3>  
    </>
  )
}

export default event