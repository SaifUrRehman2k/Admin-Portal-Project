import React from 'react'

const Button = (props) => {
    return (
        <>
            <button type='button' className={props.btnClass} onClick={props.btnFucntiion}>{props.title}</button>
        </>
    )
}

export default Button
