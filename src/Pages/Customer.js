import React,{useState,useEffect} from 'react'
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input'
import ItemCount from '../Components/Inputs/ItemCount';
import Signature from '../Components/SignaturePad/Signature';
import './Cutomer.css'
function Customer({setTab}) {
  const [disable, setDisable] = useState(true)
  const [active , setActive] = useState(false)
    const [details, setDetails] = useState({
        customerName: "",
        date: "",
        signature:""
      });
   var itemsArr = []
      useEffect(() => {
        if(details.customerName !== "" && details.date !== ""){
             setActive(true)
        }
      }, [details])
      
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
     <Signature active={active}/>
     <Button name="Proceed Next"  disable={disable} page="customer"   func={setTab}/>
    </div>
    </>
    
  )
}

export default Customer

// 