import React,{useState,useEffect} from 'react'
import Input from '../Components/Inputs/Input'
import ItemCount from '../Components/Inputs/ItemCount';
import Signature from '../Components/SignaturePad/Signature';
import './Cutomer.css'
function Customer() {
 
    const [details, setDetails] = useState({
        customerName: "",
        date: "",
        signature:""
      });
   var itemsArr = []
      useEffect(() => {
   
      }, [])
      
    const handleChange = (e) => {
        setDetails({
          ...details,          
          [e.target.name]: e.target.value,
        });
      };

   
  return (
    
    <>
    <div className='details'>
     <Input bname="Customer Name" name="customerName" placeholder="Steven Strange" type="text" handleChange={handleChange}/>
     <Input bname="Select Date" name="date" placeholder="dd/mm/yyyy" type="text"  handleChange={handleChange}/>
     <Signature/>
     
    </div>
    </>
    
  )
}

export default Customer

// 