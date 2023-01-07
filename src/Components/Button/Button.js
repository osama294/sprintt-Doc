import React from 'react'
import './Button.css'
function Button({name,disable,func,page}) {
  
  return (
    <>
 {disable ?  <button className='g-btn' disabled={disable}>{name}</button> : <button className='btn' onClick={()=>{func()} }>  {name}</button> }
    </>
  )
}

export default Button