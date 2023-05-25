import React, { useState } from 'react'
import './Tab.css'
function TabButton({ color, icon, name, state, setActive }) {
  return (
    <>
      <div className='tab-btn' style={{ color: color }} onClick={() => { setActive(state); console.log("state", state) }}>
        <img src={icon} alt='btn' className='btn-img' style={{ filter: 'hue-rotate(90deg)' }} />
        <p>{name}</p>
      </div>
    </>
  )
}

export default TabButton