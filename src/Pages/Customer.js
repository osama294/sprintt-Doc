import React,{useState,useEffect} from 'react'
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input'
import ItemCount from '../Components/Inputs/ItemCount';
import Signature from '../Components/SignaturePad/Signature';
import './Cutomer.css'
function Customer({setTab}) {
  const [disabled, setDisabled] = useState(true)
  const [active , setActive] = useState(false)
  const [imageURL, setImageURL] = useState(null)
 const disable = ()=>{
  setDisabled(false)
 }
 const enable = ()=>{
  setDisabled(true)
 }
    const [details, setDetails] = useState({
        customerName: "",
        date: "",
        email:"",
      });
   var itemsArr = []
      useEffect(() => {
        // disable()
        if(imageURL !== ("" || null ||NaN)){
          setDisabled(false)
          enable()
        }
        if(details.customerName !== "" && details.date !== "" && details.email !== ""){
             setActive(true)
        }
      
      }, [details])
      useEffect(() => {
        if(imageURL !== ("" || null ||NaN)){
          setDisabled(false)
          enable()
        }
      }, [imageURL])
      
      // const getSignature = ()=>{
      //   setDisabled(false)
      // }
    const handleChange = (e) => {
        setDetails({
          ...details,          
          [e.target.name]: e.target.value,
        });
      };
   const    getSignatureValue = (signature)=>{
setImageURL(signature)
disable()
   } 

      const getStep = ()=>{
        // setActive("3")
        setTab("installer")
    }
  return (
    
    <>
    <div className='details'>
     <Input bname="Customer Name" name="customerName" placeholder="Steven Strange" type="text" handleChange={handleChange}/>
     <Input bname="Email" name="email" placeholder="123@mail.com" type="text" handleChange={handleChange}/>
     <Input bname="Select Date" name="date" placeholder="dd/mm/yyyy" type="text"  handleChange={handleChange}/>
     <Signature active={active} setImageURL={getSignatureValue} imageURL={imageURL}/>
     <Button name="Proceed Next"  disable={disabled} page="customer"   func={getStep}/>
    </div>
    </>
    
  )
}

export default Customer

// 