import "./App.css";
import React from "react";

const stringMan = (val) => {
  const paragraph = document.getElementById("subject").value;
  const wordsNotToReverse = document.getElementById("number").value;

  function reverseAllButLastN(paragraph, n) {
    return paragraph.split(".").map((sentence) => {
        const words = sentence.trim().split(" ");

        const reversedWords = [];

        const lastReverseIndex = words.length - 1 - n;
        for (let idx = lastReverseIndex; idx >= 0; idx--) {
          reversedWords.push(words[idx]);
        }

        const normalWords = words.slice(words.length - n);
        return reversedWords.concat(normalWords).join(" ");
      }).join(". ");
  }
  const result = reverseAllButLastN(paragraph, wordsNotToReverse);
  document.write('<span style="font-size:18px;">Input String: ' + paragraph + "</span>");
  document.write("<br>");
  document.write('<span style="font-weight: bold;font-size:20px">Output String: ' +result + "</span>");
};

function App() {
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-25">
            <label htmlFor="subject">Input String</label>
          </div>
          <div className="col-75">
            <textarea id="subject" name="subject"></textarea>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="number">Skip Last</label>
          </div>
          <div className="col-75">
            <input type="number" id="number" name="number" max="30" />
          </div>
        </div>
        <div className="row center">
          <input type="submit" value="Run" onClick={stringMan} />
        </div>
      </form>
    </div>
  );
}

export default App;
