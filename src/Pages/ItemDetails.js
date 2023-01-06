import React, { useState, useEffect } from 'react'
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input'
import ItemCount from '../Components/Inputs/ItemCount';
import './Details.css'
function ItemDetails() {
    const [disable, setDisable] = useState(true)
    const [details, setDetails] = useState({
        businessName: "",
        itemCount: "",
    });
    var temp;
    temp = { item: "", count: "" }
    const [itemArr, setItemArr] = useState([])

    const getValuesInParent = (index, value, quantity) => {
        let t = itemArr
        t[index -1] = { item: value, count: quantity }
        console.log("old testament", t)
    }

    useEffect(() => {
        let d = []
        if (details.itemCount != 0) {
            for (var i = 1; i <= details.itemCount; i++) {
                d = [...d, temp]
            }
            setItemArr(d)
            console.log("older testament", d)
        }
    if(itemArr.length !==0) {  
         for(var i = 0 ; i < itemArr.length ;i++){
            if(itemArr[i].item == ''){
                console.log("item",itemArr[i].item == '')
            }
        }}
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
                <Input bname="Business Name" name="businessName" placeholder="Star Bucks coffee" type="text" handleChange={handleChange} />
                <Input bname="Number of items" name="itemCount" placeholder="Please enter number of items" type="text" handleChange={handleChange} />
                <div className='count-container'>
                    {
                        details.itemCount && Array.from({ length: details.itemCount }).map((name, index) => {
                            return <ItemCount key={index} name={name} onSelect={getValuesInParent} indi={index + 1}  />
                        })
                    }
                </div>
                <Button name="Proceed Next" disable={disable} />
            </div>
        </>

    )
}

export default ItemDetails

// 