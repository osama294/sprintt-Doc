import React, { useState, useEffect } from 'react'
import Modal from '../Modal/Modal'
import './input.css'
import {AiFillMinusSquare,AiFillPlusSquare} from 'react-icons/ai'
// import {BsFillPlusSquareFill} from 'react-icons/bs'
function ItemCount({ bname, name, indi, placeholder, type, onSelect }) {
    const [show, setShow] = useState(false)
    const [itemVal, setItemVal] = useState("")
    const [quantity, setQuantity] = useState(1)


    const getValue = (index, value) => {
        setItemVal(value)
        console.log('check values', index, value)
    }

    // const [item ,setItem ] = useState({
    //     count : "",
    //     itemName :''
    // })
    // const handleChanges = (e) => {
    //     setItem({
    //       ...item,
    //       [e.target.name]: e.target.value,
    //     });
    //   };
    //   console.log("itemsss",item)
    // const [ data,setData] = useState([{item:"",count:""}])
    // useEffect(() => {
    //   console.log("EAF",data)
    // }, [data])

    // const onchangeInput = (val, index) => {
    //     // let temp = itemNames;
    //     let temp = itemNames.map(i=>itemNames.push(i));
    //     itemNames[index] = val.target.value;
    //     // setItemNames({item:e.target.value,count:"1"})
    //     console.log("optp",temp);
    //     setItemNames(temp);
    //     console.log("sad",itemNames);
    //   };

    return (
        <div className='input-row'>
            <div className='input-item'>
                <p className='field-name'>Select Item</p>
                <input placeholder="Select drop down" type="" className="item" value={itemVal} name={name} onClick={() => { setShow(true); console.log("bsdk", indi) }} />
            </div>
            <div className='input-quantity'>
                <p className='field-name'>Quantity</p>
                <p className='plus' onClick={()=>{setQuantity(quantity + 1)}}><AiFillPlusSquare/></p>
                <p className='minus'onClick={()=>{setQuantity(quantity - 1)}} ><AiFillMinusSquare/></p>
                <input placeholder={placeholder} type="number" className="quantity" onChange={(e)=>{onSelect(indi,itemVal,quantity)}} value={quantity} name={name} />
            </div>
            {show && <Modal key={indi} itemNo={indi} onSelect={getValue} setItemVal={setItemVal} setShow={setShow} />}
        </div>
    )
}

export default ItemCount