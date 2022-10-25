import React,{useState} from 'react'

export default function TextForm (props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked " + text)
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleLoClick = ()=>{
      // console.log("Uppercase was clicked " + text)
       let newText = text.toLowerCase();
       setText(newText)
   }
   const handleClearClick = ()=>{
    // console.log("Uppercase was clicked " + text)
     let newText = "";
     setText(newText)
 }
    const handleOnChange = (event)=>{
        //console.log("On change")
        setText(event.target.value)
    }
    const [text, setText] = useState('');
  return (
    <>
    <div className="container">
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value= {text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn primary" onClick={handleUpClick}>Convert to uppercase</button>
            <button className="btn btn primary" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn primary" onClick={handleClearClick}>Clear text</button>
    </div>
    <div className="container">
      <h2>Your text sumarry</h2>
      <p>{text.split(" ").length} word and {text.length} character</p>
      <p>{0.008 * text.split(" ").length} minutes read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
