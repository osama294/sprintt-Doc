import React, { useState, useEffect } from 'react'
import Button from '../Components/Button/Button';
import Input from '../Components/Inputs/Input'
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import ItemCount from '../Components/Inputs/ItemCount';
import Signature from '../Components/SignaturePad/Signature';
import { Calendar } from 'primereact/calendar';
import './Cutomer.css'
function Customer({ setTab, getData }) {
  const [disabled, setDisabled] = useState(true)
  const [active, setActive] = useState(false)
  const [date, setDate] = useState(null)
  const [imageURL, setImageURL] = useState(null)
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const datereg = { regex: "/^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$" };
  const disable = () => {
    setDisabled(false)
  }
  const enable = () => {
    setDisabled(true)
  }
  const [details, setDetails] = useState({
    customerName: "",
    date: "",
    email: "",
  });
  var itemsArr = []
  useEffect(() => {

    enable()
    if (imageURL !== null && details.customerName !== "" && date !== null && details.email !== "") {
      console.log("accepted")
      if (details.email.match(validRegex)) {
        disable()
      }
      else {
        enable()
      }
    }
    if (imageURL == null && details.customerName == "" && details.email == "", date == null) {
      enable()
    }
    // else
    // {
    //       setActive(false)
    // }

  }, [details, date, imageURL])
  const [isLoading, setIsLoading] = useState(false);
  const [responseText, setResponseText] = useState('');


  const [formData, setFormData] = useState({
    background: '',
    businessModel: '',
    productVision: '',
    requirements: '',
    limitations: '',
    competitors: '',
    design: '',
    stage: '',
    contactPerson: '',
    timelines: '',
    businessRequirements: '',
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setIsFormValid(isFormComplete());
  };

  const isFormComplete = () => {
    for (const field in formData) {
      if (formData[field] === '') {
        return false;
      }
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isFormValid) {
      return; // Prevent submission if the form is incomplete
    }
    setIsLoading(true);

    const formattedData = {
      model: "text-davinci-003",
      prompt: `Generate a requriment document for an application that has the following properties:\n\nBackground: ${formData.background}\n\nBusiness Model: ${formData.businessModel}\n\nProduct Vision: ${formData.productVision}\n\nRequirements: ${formData.requirements}\n\nKnown Limitations and Risks: ${formData.limitations}\n\nCompetitors: ${formData.competitors}\n\nDesign Requirements: ${formData.design}\n\nCurrent Stage of the Application: ${formData.stage}\n\nContact Person on Behalf of the Client: ${formData.contactPerson}\n\nTimelines: ${formData.timelines}\n\nBusiness Requirements: ${formData.businessRequirements}`,
      max_tokens: 7,
      temperature: 0
    };

    console.log(formattedData)
    try {
      const response = await fetch('https://api.openai.com/v1/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer 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'
        },
        body: JSON.stringify(formattedData),
      });

      if (response.ok) {
        const data = await response.json();
        // Use the generated response from the API as needed
        console.log(data.response);
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  return (

    <>
      <div className="container2">
        <div className="left-section">

          <div className="form-container">
            <h1 className="form-heading">Project Requirements Form</h1>
            <form onSubmit={handleSubmit} className="form">
              <label className="form-label">
                Background on the application itself and its purpose:
                <textarea
                  className="form-textarea"
                  name="background"
                  value={formData.background}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                Business Model:
                <textarea
                  className="form-textarea"
                  name="businessModel"
                  value={formData.businessModel}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                Product Vision:
                <textarea
                  className="form-textarea"
                  name="productVision"
                  value={formData.productVision}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                Requirements:
                <textarea
                  className="form-textarea"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                Known Limitations and Risks:
                <textarea
                  className="form-textarea"
                  name="limitations"
                  value={formData.limitations}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                Competitors:
                <textarea
                  className="form-textarea"
                  name="competitors"
                  value={formData.competitors}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                Design Requirements:
                <textarea
                  className="form-textarea"
                  name="design"
                  value={formData.design}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                Current Stage of the Application:
                <textarea
                  className="form-textarea"
                  name="stage"
                  value={formData.stage}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                Contact Person on Behalf of the Client:
                <input
                  className="form-input"
                  type="text"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                Timelines:
                <textarea
                  className="form-textarea"
                  name="timelines"
                  value={formData.timelines}
                  onChange={handleChange}
                />
              </label>
              <label className="form-label">
                Business Requirements:
                <textarea
                  className="form-textarea"
                  name="businessRequirements"
                  value={formData.businessRequirements}
                  onChange={handleChange}
                />
              </label>
              <button type="submit" className="form-submit-button" disabled={!isFormValid}>
                Submit
              </button>
            </form>
          </div>

        </div>
        <div className="right-section">

          {isLoading && (
            <div>
              <div className="loader" />
              <p>Generating Requirement Documentation...</p>
            </div>
          )}

          {/* Render API response when available */}
          {responseText && <p>{responseText} : </p>}
        </div>
      </div >




    </>

  )
}

export default Customer

// 