import './App.css';
import React from 'react';


const stringMan = (val)=>{
var a =  document.getElementById("subject").value;
var b =  document.getElementById("number").value;  
const reverseWords = (sentence) =>{
  const words = sentence.toString().split(" ")
  const revWords = words.reverse()
  return revWords.join(" ")
}
val.preventDefault();
document.write(reverseWords(a));

}


function App() {
  return(
    <div className="container">
    <form >
    <div className="row">
        <div className="col-25">
          <label htmlFor="subject">Input String</label>
        </div>
        <div className="col-75">
          <textarea id="subject" name="subject"  ></textarea>
        </div>
      </div>
      <div className="row">
        <div className="col-25">
          <label htmlFor="number">Skip Last</label>
        </div>
        <div className="col-75">
          <input type="number" id="number" name="number" max="30"/>
        </div>
      </div>
      <div className="row center">
        <input type="submit" value="Run" onClick={stringMan}/>
      </div>
    </form>
  </div>

  )
}


export default App;
