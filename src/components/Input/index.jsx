import React from 'react'

const Input = (props) => {
  return (
    <>
      <div className='input'>  
            <label htmlFor={props.inputID}>{props.inputName}</label>
            <input type={props.type} placeholder={props.placeHolder} id={props.inputID} onChange={props.updatedVal}/>
        </div>
    </>
  )
}

export default Input
