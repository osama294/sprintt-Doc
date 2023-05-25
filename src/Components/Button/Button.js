import React from 'react'
import './Button.css'
function Button({name,disable,funcs,func,page}) {
  
  return (
    <>
 {disable ?  <button className='g-btn' onClick={()=>{funcs();console.log("marijuana")}}>{name}</button> : <button className='btn' onClick={()=>{func()} }>  {name}</button> }
    </>
  )
}

export default Button