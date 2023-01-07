import React,{useState,useEffect} from 'react'
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input'
import './InstallerDetails.css'
function InstallerDetails() {
 
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
    <div className='installer-details'>
     <Input bname="Installer Name" name="customerName" placeholder="Steven Strange" type="text" handleChange={handleChange}/>
     {/* <Input bname="Select Date" name="date" placeholder="dd/mm/yyyy" type="text"  handleChange={handleChange}/> */}
     <div className='input-message'>
       <p className='field-message'>Add Notes</p>
       <textarea placeholder="Add comments here.."  type="text" className="message" name="notes"  onChange={handleChange}/>
    </div>
     <Button name="Submit"/>
    </div>
    </>
    
  )
}

export default InstallerDetails

