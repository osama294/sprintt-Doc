import React,{useState,useRef} from 'react'
import  SignatureCanvas from 'react-signature-canvas';
import './Signature.css'
function Signature() {
  const sigCanvas = useRef()
  const [imageURL, setImageURL] = useState(null)
  const create = () => {
    const URL = sigCanvas.current.getTrimmedCanvas().toDataURL('image/png')
    setImageURL(URL)
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
         <p className='field-name'>Add Signature Here</p>
         <span className='span' onClick={() => sigCanvas.current.clear()}>Clear Signature</span>
      </div>
    
    <SignatureCanvas penColor="black"
                canvasProps={{className: 'sigCanvas'}}
                ref={sigCanvas} />
    </div>
    </>
  )
}

export default Signature