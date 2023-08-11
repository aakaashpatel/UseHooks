import React from 'react'

const header = (props) => {
  return (
    <div>
        <h1>Hii , I'm {props.name} {props.last}</h1>
        {props.children}
    </div>
  )
}

export default header