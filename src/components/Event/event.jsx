import React from 'react'

const event = (props) => {
    let month =props.passedDate.toLocaleString('default',{month:'long'});
    let day =props.passedDate.toLocaleString('default',{day:'2-digit'});
    let year =props.passedDate.getFullYear();
    
  return (
    <>
      <div>{month}</div>
      <div>{day}</div>
      <div>{year}</div>
      <h1>{props.passedTitle}</h1>
      <h3>{props.passedAmount}</h3>  
    </>
  )
}

export default event