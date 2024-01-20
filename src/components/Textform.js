
import React, { useState } from 'react';

export default function Textform(props) {
    // Convert to UpperCase
    const convertToUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.ShowAlert("Text Converted to Upper Case successfully", "success");
    }

    // Convert to LowerCase
    const convertToLowerCase = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.ShowAlert("Text Converted to Lower Case successfully", "success");
    }

    //Sentence Case
    const SentenceCase = () => {
        const sentence = text.split(".");
        const capitalizedSentences = sentence.map(sentence => {
            return sentence.trim().charAt(0).toUpperCase() + sentence.slice(1);
        });
        const resultText = capitalizedSentences.join(". ");
        setText(resultText);
        props.ShowAlert("Text Converted to Sentence Case successfully", "success");
    }

    // Capitalized Case
    const CapCase = () => {
        const words = text.split(" ");
        const capitalizedSentences = words.map(words => {
            return words.trim().charAt(0).toUpperCase() + words.slice(1);
        });
        const resultText = capitalizedSentences.join(" ");
        setText(resultText);
        props.ShowAlert("Text Capitalized successfully", "success");
    }

    // copy to clipboard
    const copytoclipboard = () => {
        navigator.clipboard.writeText(text);
        props.ShowAlert("Text Copied to clipboard successfully", "success");
    }

    // dowload text 
    const downloadText = () => {
        const fileName = 'myFile.txt';
        const blob = new Blob([text], { type: 'text/plain' });
        const link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        link.download = fileName;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    // Remove Extra Space
    const remExtraSpace = () => {
        let newText = text.replace(/\s+/g, ' ');
        setText(newText);
        props.ShowAlert("ExtraSpaces have been removed successfully", "success");
    }
    // clear text
    const clearText = () => {
        setText("");
        props.ShowAlert("Text Cleared successfully", "success");
    }


    const onchangeToUpper = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState("");

    return (
        <>
            <div className="container mx-auto m-5" style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
                <h2>Enter Your text Here </h2>
                <textarea
                    className="form-control"
                    rows="10"
                    value={text}
                    onChange={onchangeToUpper}
                    placeholder='Enter Your Text Here'
                    style={{
                        backgroundColor: props.mode === 'light' ? 'white' : '#3d5578', color: props.mode === 'light' ? 'black' : 'white', '::placeholder': {
                            color: props.mode === 'light' ? 'black' : 'white'
                        }
                    }}
                ></textarea>
                <button className="btn btn-primary my-3 mx-2" onClick={convertToUpper}>UpperCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={convertToLowerCase}>LowerCase</button>
                <button className="btn btn-primary my-3 mx-2" onClick={SentenceCase}>Sentence case</button>
                <button className="btn btn-primary my-3 mx-2" onClick={CapCase}>Capitalized case</button>
                <button className="btn btn-primary my-3 mx-2" onClick={remExtraSpace}>Remove Extra Space</button>
                <button className="btn btn-primary my-3 mx-2" onClick={copytoclipboard}>Copy to Clipboard</button>
                <button className="btn btn-primary my-3 mx-2" onClick={downloadText}>Download Text</button>
                <button className="btn btn-primary my-3 mx-2" onClick={clearText}>Clear Text</button>
                <h2>Text Summary :</h2>
                <p>{text.split(" ").length} words | {text.length} characters | {text.split(".").length - 1} Sentences | {text.split("\n").length - 1} Lines | {text.split(" ").length / 200} Minutes</p>
                <h2>Preview :</h2>
                <p>{text != "" ? text : "Please Enter Text To Preview here"}</p>

            </div>
        </>
    )
}
