import React from 'react'
import { useEffect, useState } from "react"
import JsPDF from 'jspdf';
import Sbutton from '../Components/Button/Sbutton'
import './ModalData.css'
import { Notify } from 'notiflix/build/notiflix-notify-aio';

function ModalData({ setTab, setActiveLast, count, date, itemDetails, itemCreds, customerDetails, customerSignature, installer, getModal }) {
    const generatePDF = () => {

        const report = new JsPDF('portrait', 'pt', 'a4');
        report.html(document.querySelector('#report')).then(() => {
            console.log("randox", report)
            report.save('report.pdf');

        });
    }
    // const d = new Date(date,"dd/mm/yyyy");
    // let dat = JSON.stringify(d)

    const [itemCount, setItemCount] = useState(0)
    const [Items, setItems] = useState([])
    const [response, setResponse] = useState(null)
    const updatedArr = itemDetails.filter((item, index) => { if (item.item !== "") { return item } })
    const [inputs, setInputs] = useState({})


    useEffect(() => {
        setItemCount(itemCreds?.itemCount)

        setItems(updatedArr)
        setItems(updatedArr)
        setInputs({ date: date, business_Name: itemCreds, item_details: Items, itemCount: Items.length, customerDetails: customerDetails, customer_signature: customerSignature, installer: installer })
        console.log("ssssssss",)
    }, [itemCount])


    //   const requestOptions = {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(inputs),
    //   };
    // useEffect(() => {
    //     fetch("https://globaltechnologia.org/webAdmin/api/contactus", requestOptions)
    //     .then((response) => response.json())
    //     .then((res) => {
    //       console.log(res);
    //       setResponse(res.message);
    //       console.log(res.message);
    //     });
    // }, [])
    const handleSubmit = (e) => {
        // e.preventDefault();
        // const headers = {
        //     'Content-Type': 'application/json',
        //     'Access-Control-Allow-Origin': '*',
        //     'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
        // }
        const requestOptions = {
            method: "POST",
            headers: {
                mode: "no-cors",
                "Content-Type": "application/json",
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
            },
            body: JSON.stringify(inputs),
        };

        fetch("globaltechnologia.org/webAdmin/api/send_pdf_data", requestOptions)
            .then((response) => { return response.json(); })
            .then((response) => {
                console.log("ewf", response);

                setResponse(response?.message);
                //   Notify.success('Enter Installer Name');
                console.log(response?.message);
            });
        if (navigator.onLine == true) {
            // console.log("ewf", response)
            setActiveLast()
            getModal()
        } if (navigator.onLine == false) {
            setResponse("You are not connected to internet")
        }
    };

    console.log("itemsssssssss", navigator.onLine)

    useEffect(() => {

        console.log("formfinaldata", date, itemDetails, itemCreds, customerDetails, customerSignature, installer)

    }, [customerSignature, installer])

    return (
        <><div className='overlay'>
            <div className='modal'>
                {/* { response == null ?   */}
                <div className='pdf-container' id='report'>

                    <div className='head'><h4>Order Details</h4></div>
                    {response == null ? "" : <div className='warn'><p>{response}</p></div>}
                    <div className='pdf-row'>
                        <div className='left'><h5>Business Name</h5></div>
                        <div className='right'><p> {itemCreds?.businessName}</p></div>
                    </div>
                    <div className='pdf-row'>
                        <div className='left'><h5>Number of items</h5></div>
                        <div className='right'><p>{Items.length}</p></div>
                    </div>
                    <div className='pdf-box'>
                        <div className='top'><h5>Items Details</h5></div>
                        <div className='bottom'>{itemDetails?.map((item, index) => {
                            if (item.item !== "") {
                                return <div className='item-row' key={index}> <p className='p'>{item?.count}</p><p className='ps'>{item?.item}</p><p className='ps'>{item?.note?.note}</p></div>

                            }
                        })}

                        </div>
                    </div>
                    <div className='pdf-row'>
                        <div className='left'><h5>Customer Name</h5></div>
                        <div className='right'><p>{customerDetails?.customerName}</p></div>
                    </div>
                    <div className='pdf-row'>
                        <div className='left'><h5>Email:</h5></div>
                        <div className='right'><p>{customerDetails?.email}</p></div>
                    </div>
                    <div className='pdf-row'>
                        <div className='left'><h5>Date:</h5></div>
                        <div className='right'><p>{date ? (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear() : "no date"}</p></div>
                    </div>
                    <div className='pdf-box'>
                        <div className='top'><h5>Signature Customer:</h5></div>
                        <div className='bottom'><img src={customerSignature} className='signatures' /></div>
                    </div>
                    <div className='pdf-row'>
                        <div className='left'><h5>Installer Name:</h5></div>
                        <div className='right'><p>{installer?.installerName}</p></div>
                    </div>
                    <div className='pdf-row'>
                        <div className='left'><h5>Notes:</h5></div>
                        <div className='right'><p>{installer?.notes}</p></div>
                    </div>
                </div>
                <div className='btn-row'>
                    <Sbutton name="Close" type="close" func={getModal} onClick={() => { console.log("close") }} />
                    <Sbutton name="Confirm" type="confirm" func={handleSubmit} onClick={() => { console.log("close") }} />
                </div>
            </div>
        </div>

        </>
    )
}

export default ModalData