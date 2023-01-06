import React from 'react'
import './Button.css'
function Button({name,disable}) {
  return (
    <>
    <button className='btn' disabled={disable}>{name}</button>
    </>
  )
}

export default Button