import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import  SignaturePad from 'react-signature-canvas';
import Logo from './Components/Logo/Logo';
import Tab from './Components/Tab/Tab';
import ItemDetails from './Pages/ItemDetails';
import logos from './images/logos.png'
import Customer from './Pages/Customer';
import InstallerDetails from './Pages/InstallerDetails';
function App() {
  const [tab ,setTab] = useState("details")
  const [itemDetails ,setItemDetails] = useState([])
  // const sendDataToParent = (index) => { // the callback. Use a better name
  //   console.log("onder",index);
  //   setTab(index);
  // };
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
       
       <div className='lower'>
        <Tab setTab={setTab} tab={tab} />
        <div className={tab == "details" ? "show" : "hide"}>
        <ItemDetails setTab={setTab} itemDetails={itemDetails} setItemDetails={setItemDetails}/>
        </div>
       {/* {tab == "details" &&  <ItemDetails setTab={setTab} itemDetails={itemDetails} setItemDetails={setItemDetails}/>} */}
       <div className={tab == "customer" ? "show" : "hide"}>
       <Customer setTab={setTab}/>
       </div>
       {/* {tab == "customer" && <Customer setTab={setTab}/>} */}
       <div className={tab == "installer" ? "show" : "hide"}>
       <InstallerDetails/>
       </div>
       {/* {tab == "installer" && <InstallerDetails/>} */}
       </div>
    </div>
    </div>
  );
}

export default App;
