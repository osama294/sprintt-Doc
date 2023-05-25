import React from 'react'
import Input from '../Inputs/Input'
import { AiFillCloseCircle } from 'react-icons/ai'
import './Modal.css'
import '../Button/Button.css'
import datas from '../../Data/items.json';
import { useState ,useEffect} from 'react'
import Sbutton from '../Button/Sbutton';

function Modal({ setShow, itemNo,setItemVal, onSelect }) {
    const [hover, setHover] = useState("")
    const [search, setSearch] = useState("") 
    const [data, setData] = useState(datas)
    const [active,setActive] = useState(false)
    const handleChange = (e) => {
        console.log("testament", e.target.value)
        setActive(false)
        setSearch(e.target.value.replace(/  +/g, ' '));
  
     
    };
    useEffect(() => {
     setData(datas)
     console.log("data",datas)
    }, [])
   const inputCheck =()=>{
    // if(datas.filter()){
            
    // }
   }
    const mouseOver = (event, name) => {
        setHover(name)
    }
    return (
        <div>
            <div className="overlay">
                <div className="modal">
                    <div className='modal-row'><div className='close' onClick={() => { setShow(false) }}><AiFillCloseCircle /></div></div>
                    <div className='item-box'>
                        <Input bname={`Select Item #` + itemNo} val={search} name={itemNo} handleChange={handleChange} />
                        <div className='item-container'>
                            {
                                data.length  == 0 ? (
                                    <div>loading</div>
                                ) : (
                                    data.map((item, index) => {
                                        if (item?.Allante?.toString().toLowerCase().includes(search.toString().toLowerCase()) || search === '') {

                                            return (<> {hover == item.Allante ?  <div key={index} onClick={(e)=>{setActive(!active); setSearch(item.Allante);onSelect(itemNo, item.Allante)}} className="item-hover">{item.Allante}</div>
                                                : <div key={index}  onMouseOver={() => { setHover(item.Allante) }} onClick={(e)=>{ setActive(!active);setSearch(item.Allante);onSelect(itemNo, item.Allante)}} className="item">{item.Allante}</div>}</>)
                                        }
                                    })
                                )
                            }
                        </div>
                    </div>
                    <div className='btn-row'>
                        <Sbutton  name="Close" type="close" func={setShow} onClick={()=>{console.log("close")}}/>
                        <button className='suvbtn' disabled={!active} onClick={()=>{ setShow(false); setItemVal(search)}}>Confirm</button>
                        {/* <Sbutton name="Confirm" type="confirm" func={setShow} onClick={()=>{console.log("close")}}/> */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
