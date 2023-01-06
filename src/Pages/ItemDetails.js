import React, { useState, useEffect } from 'react'
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input'
import ItemCount from '../Components/Inputs/ItemCount';
import './Details.css'
function ItemDetails() {
    let tempObj = { item: "", count: "" }
    const [itemNames, setItemNames] = useState([])
    const [disable, setDisable] = useState(true)
    const [details, setDetails] = useState({
        businessName: "",
        itemCount: "",

        quantity: ""
    });

    const getValuesInParent = (index, value) => {
        console.log("old testament", index, value)
        let data = itemNames[index]

    }

    var itemsArr = []
    useEffect(() => {
        console.log("Details", details)
        if (details.itemCount != 0) {
            for (var i = 0; i < details.itemCount; i++) {
                var temp;
                temp = i;
                itemsArr.push(i);
                setItemNames([...itemNames, tempObj])
                console.log("count", itemNames)
            }
        }
    }, [details])

    const handleChange = (e) => {
        setDetails({
            ...details,
            [e.target.name]: e.target.value,
        });
    };

    const onchangeInput = (val, index) => {
        let temp = itemNames;

        // itemNames[index] = val.target.value;
        console.log("optp", temp);
        // setItemNames(temp);
        // console.log(temp);
    };
    return (

        <>
            <div className='details'>
                <Input bname="Business Name" name="businessName" placeholder="Star Bucks coffee" type="text" handleChange={handleChange} />
                <Input bname="Number of items" name="itemCount" placeholder="Please enter number of items" type="text" handleChange={handleChange} />
                <div className='count-container'>
                    {
                        details.itemCount && Array.from({ length: details.itemCount }).map((name, index) => {
                            return <ItemCount key={index} name={name} onSelect={getValuesInParent} indi={index + 1} onchangeInput={onchangeInput} />
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