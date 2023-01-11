import logo from './logo.svg';
import './App.css';

// import "https://unpkg.com/primereact/calendar/calendar.min.js";
// import "https://unpkg.com/primereact/core/core.min.js"
import { useState,useEffect } from 'react';
import  SignaturePad from 'react-signature-canvas';
import Logo from './Components/Logo/Logo';
import Tab from './Components/Tab/Tab';
import ItemDetails from './Pages/ItemDetails';
import logos from './images/logos.png'
import Customer from './Pages/Customer';
import InstallerDetails from './Pages/InstallerDetails';
import ModalData from './Pages/ModalData';
import email from './images/email.png'
import Button from './Components/Button/Button';
function App() {
  const [tab ,setTab] = useState("details")
  // const [active ,setActive]= useState("1")
  const [itemCreds ,setItemCreds]= useState(null)
  // const [active ,setActive]= useState(true)
  const [itemDetails ,setItemDetails] = useState([])
  const [customerDetails ,setCustomerDetails] = useState(null)
  const [customerSignature ,setCustomerSignature] = useState(null)
  const [installer,setInstaller] = useState(null)
  const [insta,setInsta] = useState(null)
  const [date ,setDate] = useState(null)
  const [showModal ,setshowModal] =useState(false)
  const [activeLast ,setActiveLast] = useState(true)
  // const sendDataToParent = (index) => { // the callback. Use a better name
  //   console.log("onder",index);
  //   setTab(index);
  // };
  var  items = [] 
  const activeTrue=()=>{
    setActiveLast(false)
  }
  const activeFalse=()=>{
    setActiveLast(true)
    setInstaller(null)
    
  setCustomerDetails(null)
  setDate(null)
  setCustomerSignature(null)
  setshowModal(null)
  setItemCreds(null)
  setItemDetails([])
  setInsta(null)
    setTab("details")
  }
useEffect(() => {

}, [])

  // useEffect(() => {
  //  gettemArr()
  // //  items.filter((item)=>{if (item.item !== '') {return item}  else return})
  // itemDetails.forEach(element => {
  //    if(element.item !== "") {
  //         items.push(element)
  //    }
  //    else return 
  // });
  // //  setItemDetails(item => {if(item.item == '') {return } else return item})
  //  console.log("sala",items)
  // }, [items])
  
  const gettemArr = (arrr)=>{
    setInsta(arrr)
  }
  const getItemsData = (arr,creds)=>{
    setItemCreds(creds)
    setItemDetails(arr)
  }
  const getModal = (x)=>{
    setshowModal(x)
  }
  const getCustomerData = (details, image,date) =>{
  setCustomerDetails(details)
  setDate(date)
  setCustomerSignature(image)
  }
  const getInstallerData= (data)=>{
    setInstaller(data)
  }
  useEffect(() => {
   console.log("active tab", tab)
   console.log("otem",itemDetails)
  }, [itemDetails])
  
  console.log("const",tab)
  return (
    <div className="App">
   
    <div className='container'>
      <div className='upper'>
        <Logo logo={logos}/>
      </div>
       
   { activeLast   ? <div className='lower'>
        <Tab setTab={setTab} tab={tab} />
        <div className={tab == "details" ? "show" : "hide"}>
        <ItemDetails gettemArr={gettemArr}  setTab={setTab} itemDetails={itemDetails} setItemDetails={getItemsData}/>
        </div>
       {/* {tab == "details" &&  <ItemDetails setTab={setTab} itemDetails={itemDetails} setItemDetails={setItemDetails}/>} */}
       <div className={tab == "customer" ? "show" : "hide"}>
       <Customer setTab={setTab} getData={getCustomerData}/>
       </div>
       {/* {tab == "customer" && <Customer setTab={setTab}/>} */}
       <div className={tab == "installer" ? "show" : "hide"}>
       <InstallerDetails getInstallerData={getInstallerData} getModal={getModal}/>
       </div>
       {/* {tab == "installer" && <InstallerDetails/>} */}
       </div> :<div className='layout'> <div className='last'>
        <img src={email} />
        <p>Operation has been completed successfully.<br></br> Check email for verification.</p> 
     
       </div>    
       <Button name="Home"  disable={false} func={activeFalse}  />
      </div>
       }
    </div>
    <div>
{  showModal &&    <ModalData setTab={setTab} setActiveLast={activeTrue} date={date} itemDetails={itemDetails} itemCreds={itemCreds} customerSignature={customerSignature} customerDetails={customerDetails} showModal={showModal} getModal={getModal}  installer={installer}/> }    </div>
  
    </div>

  );
}

export default App;
