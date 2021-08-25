import './App.css';
import React from 'react';


const stringMan = (val)=>{
var a =  document.getElementById("subject").value;
var b =  document.getElementById("number").value;  
function reverseWords(str) {
  var result = '';
  (function readWord(i = 0) {
    var word = '';
    if(i > str.length) {
        return '';
    }    
    while(str[i] !== ' ' && i < str.length) {
      word += str[i];
      i++;
    }    
    readWord(++i); 
    result += word + ' ';    
  }());
  return result.trim();
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
