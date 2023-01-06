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
  const sendDataToParent = (index) => { // the callback. Use a better name
    console.log("onder",index);
    setTab(index);
  };
  useEffect(() => {
   console.log("active tab", tab)
  }, [tab])
  
  console.log("const",tab)
  return (
    <div className="App">
      {/* <SignaturePad penColor='black'
    canvasProps={{width: "1000", height: "1000", className: 'sigCanvas'}} />, */}
    <div className='container'>
      <div className='upper'>
        <Logo logo={logos}/>
      </div>
       
       <div className='lower'>
        <Tab setTab={setTab} tab={tab} />
       {tab == "details" &&  <ItemDetails/>}
       {tab == "customer" && <Customer/>}
       {tab == "installer" && <InstallerDetails/>}
       </div>
    </div>
    </div>
  );
}

export default App;
