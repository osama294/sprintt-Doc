import React, { useState, useEffect, useCallback } from 'react'
import Button from '../Components/Button/Button';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import "react-toastify/dist/ReactToastify.css";
import Input from '../Components/Inputs/Input'
import ItemCount from '../Components/Inputs/ItemCount';
import './Details.css'
import GoogleSignIn from '../Components/GoogleSignIn/GoogleSignIn';
import { GoogleLogin } from 'react-google-login';


var temp;
temp = { item: "", count: "" }
function ItemDetails({ setTab, itemDetails, setItemDetails, setActive }) {
    const [disable, setDisable] = useState(true)
    const [details, setDetails] = useState({
        businessName: "",
        itemCount: 1,

    });
    const [initialCount, setInitialCount] = useState(0)
    const [trues, setTrues] = useState(0)
    const [tempArr, setTempArr] = useState([])
    const [itemArr, setItemArr] = useState([])
    let t = itemArr
    //   updateCount
    useEffect(() => {

    }, [initialCount])



    useEffect(() => {

        // getValuesInParent()
    }, [details, itemArr])

    const getStep = () => {
        setItemDetails(itemArr, details)
        // setActive("2")
        setTab("customer")
    }

    const responseGoogle = (response) => {
        console.log(response);
        // Handle the response from Google Sign-In
        getStep()


    };


    return (
        <>
            <div>
                <h1>Welcome, Please Sign In to Proceed</h1>
                <div>
                    <GoogleLogin
                        clientId="346871269765-url6gpn3tubg9nhu4h43627rv5d1a79u.apps.googleusercontent.com"
                        buttonText="Sign in with Google"
                        onSuccess={responseGoogle}
                        onFailure={responseGoogle}
                        cookiePolicy={'single_host_origin'}
                    />
                </div>
            </div>


        </>

    )
}

export default ItemDetails

// 