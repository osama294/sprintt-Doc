import React, { useState, useEffect, useCallback } from 'react'
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input'
import ItemCount from '../Components/Inputs/ItemCount';
import './Details.css'
function ItemDetails({ setTab,itemDetails,setItemDetails ,setActive}) {
    const [disable, setDisable] = useState(true)
    const [details, setDetails] = useState({
        businessName: "",
        itemCount: 0,

    });
    const [initialCount, setInitialCount] = useState(0)
    const [trues, setTrues] = useState(0)
    var temp;
    temp = { item: "", count: "" }
    const [itemArr, setItemArr] = useState([])

    const getValuesInParent = (index, value, quantity) => {
        // let t = itemArr
        let t = itemDetails
        t[index - 1] = { item: value, count: quantity }
        console.log("old testament", t); console.log("asdewf", trues)
        checkItemVal()
        // if (t[index - 1].item !== '') { setTrues(trues + 1) }

    }
    // useEffect(() => {
        
    // }, [trues])
    const checkItemVal = () => {
        if(details.item !==(0 || NaN || "") && details.businessName !== "")
     {   let check = false
        console.log("halsey", itemArr.length, trues)
        itemArr.forEach((item) => {
            if (item.item == "") { 
                check = true
             }else{
                check= false
             }
        } )
        setDisable(check)}
    }
    const updateCount = (count) => {
        return setInitialCount(prev => prev = parseInt(count))
    }

    const checkItemCount = () => {
        console.log("initail", details.itemCount, initialCount)
        if (details.itemCount !== (0 || NaN || "")) {
            updateCount(details.itemCount)
        }
        if (details.itemCount > initialCount) {
            updateCount(parseInt(details.itemCount))
        }
        if (details.itemCount == initialCount) {
            console.log("initial render")
        }
    }
    let d = []
    useEffect(() => {
        for (var i = 1; i <= details.itemCount; i++) {
            d = [...d, temp]
        }
        setItemArr(d)
        setItemDetails(d)
        console.log("older testament", d)
    }, [details])

    useEffect(() => {
        if (details.itemCount !== 0) {
            checkItemCount()
        }
    }, [details.itemCount])
    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    };
const getStep = ()=>{
    setActive("2")
    setTab("customer")
}
    return (

        <>
            <div className='details'>
                <Input bname="Business Name" name="businessName" placeholder="Star Bucks coffee" type="text" handleChange={handleChange} />
                <Input bname="Number of items" name="itemCount" placeholder="Please enter number of items" type="number" handleChange={handleChange} />
                <div className='count-container'>
                    {
                        Array.from({ length: initialCount }).map((name, index) => {
                            return <ItemCount key={index} name={name} onSelect={getValuesInParent} indi={index + 1} />
                        })
                    }
                </div>
                <Button name="Proceed Next" disable={disable}  func={getStep} />
            </div>
        </>

    )
}

export default ItemDetails

// 