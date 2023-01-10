import React,{useState,useRef,useEffect} from 'react'
import  SignatureCanvas from 'react-signature-canvas';
import Sbutton from '../Button/Sbutton';
import './Signature.css'
import {FaPlusSquare} from 'react-icons/fa'
function Signature({active,setActive,imageURL,enable ,setImageURL}) {
  const sigCanvas = useRef()
  const [show, setShow] = useState(false)
  useEffect(() => {
      if(imageURL == null){
        
      }
  }, [])
  
  const create = () => {
    const URL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png')
    setImageURL(URL)
    console.log("image",imageURL)
    enable()
  }
  const download = () => {
    const dlink = document.createElement("a")
    dlink.setAttribute("href", imageURL)
    dlink.setAttribute("download", "signature.png")
    dlink.click()
  }
  return (
    <>
    <div className='sigan'>
      <div className='sigan-row'>
        <div>
         <p className='field-name'>Add Signature Here</p>
      
        </div>
         <span className='span' onClick={() =>{  setShow(true);sigCanvas.current.clear()}}>Clear Signature</span>
      </div>
      <p className='field-note'>Please fill the fields above to enable signature*</p>
   <div className='sig-box'>
    {/* {show ?<SignatureCanvas penColor="black"
                canvasProps={{className: 'sigCanvas'}}
                ref={sigCanvas} />: <div className='sigCan'> <FaPlusSquare/> </div>} */}
                 {/* <Sbutton name="Confirm" type="confirm" func={create} /> */}
                 <div className='sigCan' onClick={()=>{setShow(true)}}>{imageURL ? <img src={imageURL} className='signat'/> : <FaPlusSquare/>}</div>
                  { show && <div className='overlay'>
                  <div className='modal'>
                  <p className='field-name'>Signature Here</p>
                  <SignatureCanvas penColor="black"
                canvasProps={{className: 'sigCanvas'}}
                ref={sigCanvas} />
                    <div className='btn-row'>
                        <Sbutton  name="Close" type="close" func={setShow} onClick={()=>{console.log("close")}}/>
                        <button className='suvbtn' onClick={()=>{ create();  setShow(false); }}>Confirm</button>
                        {/* <Sbutton name="Confirm" type="confirm" func={setShow} onClick={()=>{console.log("close")}}/> */}
                    </div>
                  </div>
                  </div>}
                </div> 
    </div>
    </>
  )
}

export default Signature