import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text Here");
  
  const changeToUpperCase = () => {
    setText(text.toUpperCase());
  };
  const changeToLowerCase = () => {
    setText(text.toLowerCase());
  };

  const changeToToggleCase = () => {
    setText(
      text
        .toUpperCase()
        .split(" ")
        .map(function (word) {
          return word.charAt(0).toLowerCase() + word.slice(1);
        })
        .join(" ")
    );
  };
  const changeToCamelCase = () => {
    setText(
      text
        .toLowerCase()
        .split(" ")
        .map(function (word) {
          return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join(" ")
    );
  };
  const copyText = () => {
    let text = document.getElementById("exampleFormControlTextarea1");
    text.select();
    navigator.clipboard.writeText(text.value);
  };
  const removeExtraSpace = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };
  const clear = () => {
    setText("");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const countSentences = (text) => {
    const sentenceEndings = [".", "!", "?"];
    let sentenceCount = 0;
    for (let i = 0; i < text.length; i++) {
      if (sentenceEndings.includes(text[i])) {
        sentenceCount++;
      }
    }
    return sentenceCount;
  };
  const countLines = (text) => {
    const lines = text.split("\n");
    const nonEmptyLines = lines.filter((line) => line.trim() !== "");
    return nonEmptyLines.length;
  };

  const wordCount = text
    .split(/\s+/)
    .filter((element) => element.length !== 0).length;
  const characterCount = text.replace(/\s/g, "").length;
  const spaceCount = text.split(" ").length - 1; // Counting spaces as separate elements
  const sentenceCount = countSentences(text);
  const minutesToRead = 0.008 * wordCount;
  const linesCount = countLines(text);

  return (
    <div className="container py-1">
      <div className=" my-2 ">
        <h2 className={`text-${props.mode}`}>Enter Text to Analyze</h2>

        <textarea
          className="form-control mt-2 mb-3"
          id="exampleFormControlTextarea1"
          rows="15"
          onChange={handleOnChange}
          value={text}
        ></textarea>

        <div className="row">
          <div className="col">
            <button
              className="btn  btn-sm btn-light m-2 "
              onClick={changeToUpperCase}
            >
              To UpperCase
            </button>
            <button
              className="btn  btn-sm  btn-light m-2"
              onClick={changeToLowerCase}
            >
              To LowerCase
            </button>

            <button
              className="btn  btn-sm btn-light m-2"
              onClick={changeToToggleCase}
            >
              To ToggleCase
            </button>
            <button
              className="btn btn-sm  btn-light m-2"
              onClick={changeToCamelCase}
            >
              To CamelCase
            </button>
            <button
              className={`btn  btn-sm btn-light m-2`}
              onClick={removeExtraSpace}
            >
              Remove Extra Space
            </button>
            <button className=" btn btn-sm btn-light m-2" onClick={copyText}>
              Copy Text
            </button>
            <button className="btn btn-sm  btn-light m-2" onClick={clear}>
              Clear Text
            </button>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className={`text-${props.mode}`}>Your Text Summary</h3>
        <hr style={{ color: "black" }} />
        <p className={`text-${props.mode}`}>
          {wordCount} Words | {characterCount} Characters | {sentenceCount}{" "}
          Sentences | {linesCount} Lines | {spaceCount} Spaces
        </p>
        <p className={`text-${props.mode}`}>
          {minutesToRead.toFixed(2)} Minutes to read
        </p>
      </div>
    </div>
  );
}
