import React, { useState } from 'react'


export default function TextForm(props) {
    const convertUpperCase = () => {
        console.log("You have been clicked on UpperCase Button." + text);
        let currentText = text.toUpperCase();
        setText(currentText)
    }
    const convertLowerCase = () => {
        console.log("You have been clicked on LowerCase Button." + text);
        let currentText = text.toLowerCase();
        setText(currentText)
    }
    const handleOnChange = (event) => {
        console.log("On Change Handle.");
        setText(event.target.value)
    }

    const Clear = () => {
        let currentText = "";
        setText(currentText);
    }

    const [text, setText] = useState('');
    return (
        <>
            <div className="mb-3">
                <h3>{props.heading}</h3>
                <textarea className="form-control" onChange={handleOnChange} value={text} id="box" rows="10"></textarea>
            </div>
            <button className='btn1 btn-primary' onClick={convertUpperCase}><b>UpperCase</b></button>
            <button className='btn1 btn-primary' onClick={convertLowerCase}><b>LowerCase</b></button>
            <button className='btn1 btn-primary' onClick={Clear}><b>Clear</b></button>
        </>
    )
}
