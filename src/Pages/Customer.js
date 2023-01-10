import React, { useState, useEffect } from 'react'
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input'
import { toast, ToastContainer } from 'react-toastify';
import ItemCount from '../Components/Inputs/ItemCount';
import Signature from '../Components/SignaturePad/Signature';
import { Calendar } from 'primereact/calendar';
import './Cutomer.css'
function Customer({ setTab, getData }) {
  const [disabled, setDisabled] = useState(true)
  const [active, setActive] = useState(false)
  const [date ,setDate] =useState(null)
  const [imageURL, setImageURL] = useState(null)
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
 const datereg =  {regex:"/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$"};
  const disable = () => {
    setDisabled(false)
  }
  const enable = () => {
    setDisabled(true)
  }
  const [details, setDetails] = useState({
    customerName: "",
    date: "",
    email: "",
  });
  var itemsArr = []
  useEffect(() => {
    // disable()
    // if (imageURL !== ("" || null || NaN)) {
    //   setDisabled(false)
    //   // enable()
    // }
    enable()
    if (imageURL !== null && details.customerName !== "" && date !== null && details.email !== "") {
      console.log("accepted")
         if(details.email.match(validRegex) ){
          disable()
         }
         else{
          enable()
         }
    }
    if(imageURL == null && details.customerName == "" && details.email == "" ,date == null){
      enable()
    }
    // else
    // {
    //       setActive(false)
    // }

  }, [details,date,imageURL])
  // useEffect(() => {
    
  //   if (imageURL !==  null) {
  //     setDisabled(false)
  //     disable()
  //   }
  // }, [imageURL])

  // const getSignature = ()=>{
  //   setDisabled(false)
  // }
  const handleChange = (e) => {
    e.preventDefault()
    setDetails({
      ...details,
      [e.target.name]: e.target.value,
    });
    e.preventDefault()
  };
  const getSignatureValue = (signature) => {
    setImageURL(signature)
    disable()
  }

  const validateInputs = ()=>{
 if(details.customerName !== "" && details.email !== "" && !date == null ){
  if( date !== null){
  
  } if(details.customerName !== ""){
    
  }
  if(details.email !== ""){
    
  } if(imageURL !== null){
  
  }
  
 }
else { if(details.customerName == "" && details.email == "" && date == null ){
    toast.error("Please Fill All Fields", {
      position: toast.POSITION.TOP_CENTER
    });
  }else{   if( date == null){
      toast.error("Please Select Date", {
        position: toast.POSITION.TOP_CENTER
      });
    } if(details.customerName == ""){
        toast.error("Please Enter Customer Name", {
            position: toast.POSITION.TOP_CENTER
          });
    }
    if(details.email == ""){
        toast.error("Please Enter Email", {
            position: toast.POSITION.TOP_CENTER
          });
    }
 if(details.email !==  "") {if(!details.email.match(validRegex)){
      toast.warn("Enter Valid Email !", {
        position: toast.POSITION.TOP_CENTER
      });
     
    }}
    if(imageURL == null){
      toast.warn("Enter Your Signature!", {
        position: toast.POSITION.TOP_CENTER
      });
    }
  }}

}
  const getStep = () => {
    getData(details, imageURL,date)
    // setActive("3")
    setTab("installer")
  }
  return (

    <>
      <ToastContainer />
      <div className='details'>
        <Input bname="Customer Name" name="customerName" placeholder="Example : John Doe" type="text" handleChange={handleChange} />
        <div className='input-container'>
        <p className='field-name'>Date</p>
        <Calendar dateFormat="mm/dd/yy" value={date} placeholder="mm/dd/yyyy" onChange={(e) => {setDate(e.value) ;console.log("dates",e.value)}} style={{width:"335px",border:"none",padding:"0px"}} className='input' inputClassName="input"/>
        {/* <input placeholder={placeholder} min={min} value={val} type={type} className="input" name={name} onChange={handleChange} /> */}
      </div>
      <Input bname="Customer Email" name="email" placeholder="123@mail.com" type="text" handleChange={handleChange} />
        {/* <Input bname="Select Date" name="date" placeholder="dd/mm/yyyy" type="text" handleChange={handleChange} /> */}
        <Signature active={active} setImageURL={getSignatureValue} imageURL={imageURL} />
        <Button name="Proceed Next" disable={disabled} funcs={validateInputs} page="customer" func={getStep} />
      </div>
    </>

  )
}

export default Customer

// 