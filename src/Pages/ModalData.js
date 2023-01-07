import React from 'react'
import { useEffect } from "react"


function ModalData({itemDetails}) {
    useEffect(() => {
    console.log("formfinaldata",itemDetails)
    }, [itemDetails])
    
  return (
    <div></div>
  )
}

export default ModalData