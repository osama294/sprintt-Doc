import React, { useState, useEffect, useCallback } from 'react'
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input'
import ItemCount from '../Components/Inputs/ItemCount';
import './Details.css'
function ItemDetails({ setTab,itemDetails,setItemDetails }) {
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

    //     if (trues == itemArr.length) {
    //         console.log("data testament", trues)
    //         setDisable(disable => !disable)
    //     }
    // }, [trues])
    const checkItemVal = () => {
        let check = false
        console.log("halsey", itemArr.length, trues)
        itemArr.forEach((item) => {
            if (item.item == "") { 
                check = true
             }else{
                check= false
             }
        } )
        setDisable(check)
       
        // if(itemArr.length  == trues){
        //     setDisable(false)
        // }
        // if(itemArr.length != trues){
        //      setTrues(prev => prev + 1)
        // }if(itemArr.length == trues){
        //     setDisable(prev =>  !prev)
        // }

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

        // if (initialCount != 0) {
        for (var i = 1; i <= details.itemCount; i++) {
            d = [...d, temp]
        }
        setItemArr(d)
        setItemDetails(d)
        console.log("older testament", d)
        // }
        // if (itemArr.length !== 0) {
        //   console.log("sunflower",itemArr.length)
        //     itemArr.forEach(item => {

        //         if(item.item == !""){
        //            checkItemVal()
        //            console.log("sunflower",trues)
        //         }
        //     }
        //     )
        // }
    }, [details])

    useEffect(() => {
        if (details.itemCount !== 0) {
            checkItemCount()
        }
    }, [details.itemCount])


    const handleChange = (e) => {
        // checkItemCount()
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });

    };


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
                <Button name="Proceed Next" disable={disable} page="customer" func={setTab} />
            </div>
        </>

    )
}

export default ItemDetails

// 