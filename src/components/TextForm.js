import React , {useState} from 'react'



export default function TextForm(props) {
    const [text , setText] = useState('');

    const handleUpclick= ()=>{
        console.log('upprer')
        let newtxt = text.toUpperCase();
        setText(newtxt)
    } 
    
    const handleOnchanged = (event)=>{
        console.log('onchanged')
        setText(event.target.value);
    }

    const handleLowclick = ()=>{
        console.log('lovereed');
        let newTxt = text.toLocaleLowerCase();
        setText(newTxt);
    }

    const handleClear = () =>{
        console.log('clear');
        setText('');
    }

    return (
        <div>
            <h1>{props.heading}</h1>

            <div className="mb-3">
                
                <textarea className="form-control" value={text} id="mytext" rows="8" onChange={handleOnchanged}></textarea>
            </div>
            <button type="button" className="btn btn-primary mx-1" onClick={handleUpclick} >Uppercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleLowclick} >Lowercase</button>
            <button type="button" className="btn btn-primary mx-1" onClick={handleClear} >Clear</button>
            <div className="container my-3">
            <h2>YOUR SUMMARY</h2>
            <p>{text.split(" ").length} Words ands {text.length} charrecters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
            </div>
        </div>
    )
}
