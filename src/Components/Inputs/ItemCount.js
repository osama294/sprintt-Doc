import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import Input from './Input'
import './input.css'
import { AiFillMinusSquare, AiFillPlusSquare ,AiOutlineCloseCircle} from 'react-icons/ai'
function ItemCount({ deleteItem,bname, name, indi, placeholder, type, onSelect,getAddAr }) {
    const [show, setShow] = useState(false)
    const [itemVal, setItemVal] = useState("")
    const [quantity, setQuantity] = useState(1)
    const [active, setActive] = useState(true)
   const[read ,setRead] = useState(false) 
   const [note,setNote] = useState(null)
   useEffect(() => {
 
   }, [note])
   
   const handleChange = (e) => {
    e.preventDefault()
    setNote({
      [e.target.name]: e.target.value,
    });
    e.preventDefault()
    console.log("first",note)
  };
    const getValue = (index, value) => {
        setItemVal(value)
        console.log('check values', index, value, quantity)
    }
useEffect(() => {
    // onSelect(indi,itemVal,quantity)
    onSelect(indi, itemVal, quantity ,note);
    
    getAddAr()
}, [itemVal,quantity,note])

    const addItem = () => {
        console.log("clicked");
           setQuantity(quantity + 1);
        // onSelect(indi, itemVal, quantity + 1);
    }

    const removeItem = () => {
if(quantity <= 1){
    return
}else{ setQuantity(quantity - 1)}
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
                <p className='plus' onClick={() => { addItem();onSelect(indi, itemVal, quantity,note) }}><AiFillPlusSquare /></p>
                <p className='minus' onClick={() => { removeItem(); onSelect(indi, itemVal, quantity,note) }} ><AiFillMinusSquare /></p>
                <input placeholder={placeholder} min={1} type="number" className="quantity" onChange={(e) => { setQuantity(e.target.value); onSelect(indi, itemVal, quantity,note) }} value={quantity} name={name} />
            </div>
            <div className='close'  onClick={()=>{console.log("index", indi);deleteItem(indi)}}>
    <AiOutlineCloseCircle/>
            </div>
        
            {show  &&  <Modal key={indi} itemNo={indi+1} onSelect={getValue} setItemVal={setItemVal} setShow={setShow} />}
        </div>
        <div className='btn-row'>
            {/* <span>{note?.note}</span> */}
        <Input bname="" name="note" placeholder="Note" maxlength={60} type="text" handleChange={handleChange}/>
   {/* {  active &&   <button onClick={()=>{}}>add</button>} */}
        </div>
        </div>
      
    )
}

export default ItemCount