import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import './input.css'
import { AiFillMinusSquare, AiFillPlusSquare } from 'react-icons/ai'
function ItemCount({ bname, name, indi, placeholder, type, onSelect,getAddAr }) {
    const [show, setShow] = useState(false)
    const [itemVal, setItemVal] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [active, setActive] = useState(true)
    

    const getValue = (index, value) => {
        setItemVal(value)
        console.log('check values', index, value, quantity)
    }
useEffect(() => {
    // onSelect(indi,itemVal,quantity)
}, [itemVal])

    const addItem = () => {
        console.log("clicked");
        if(active == true)  {      setQuantity(quantity + 1);}
        // onSelect(indi, itemVal, quantity + 1);
    }

    const removeItem = () => {

    if(active == true)  {  setQuantity(quantity - 1);}
        // onSelect(indi, itemVal, quantity - 1)
    }


    return (
        <div className='input-box'>
  <div className='input-row'>
            <div className='input-item'>
                <p className='field-name'>Select Item</p>
                <input placeholder="Select drop down" type="" className="item" defaultValue={itemVal} readOnly={true} name={name} onClick={() => { setShow(true);}} />
            </div>
            <div className='input-quantity'>
                <p className='field-name'>Quantity</p>
                <p className='plus' onClick={() => { addItem() }}><AiFillPlusSquare /></p>
                <p className='minus' onClick={() => { removeItem() }} ><AiFillMinusSquare /></p>
                <input placeholder={placeholder} type="number" className="quantity" onChange={(e) => { setQuantity(e.target.value); onSelect(indi, itemVal, quantity) }} value={quantity} name={name} />
            </div>
        
            {show  && active && <Modal key={indi} itemNo={indi} onSelect={getValue} setItemVal={setItemVal} setShow={setShow} />}
        </div>
        <div className='btn-row'>
   {  active &&   <button onClick={()=>{onSelect(indi, itemVal, quantity );setActive(false);getAddAr()}}>add</button>}
        </div>
        </div>
      
    )
}

export default ItemCount