import React, {useState} from 'react'


export default function TextForm(props) {
  const handleUpClick = ()=>{
    //console.log("Uppercase was clicked": + text);
    let newText = text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase","success");
  }

  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked": + text);
    let newText = text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase","success");
  }

  const handleOnChange = (event)=>{
    //console.log("Uppercase on change");
    setText(event.target.value);
    
  }

  const handleClearClick = (event)=>{
    let newText ='';
    setText(newText)
    props.showAlert("cleared","success");
    
  }

  const handleCopy=()=>{
    var text=document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert("copied","success");
  }


  const [text, setText] = useState('');
  //text = "new text"; //Wrong way to change the state
  //setText("new text"); //correct way to change the state
  return (
    <>
    <div className="container" style={{color : props.mode==='dark'?'white':'#042743'}}>
          <h1>{props.heading}</h1>
          <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
          </div>
          <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
          <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
          <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
          <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy</button>
          
    </div>
    <div className="container my-3" style={{color : props.mode==='dark'?'white':'#042743'}}> 
    <h1>Your text summary</h1>
    <p>{text.split(" ").length} word and {text.length} characters</p>
    <p>{0.08 * text.split(" ").length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Enter something in the text box about to preview it here"}</p>
    </div>
    </>
    
  )
}
