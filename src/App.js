import React, {useState} from 'react'
import './App.css';

function App() {
  const[text, setText] = useState('')
  const[history, setHistory] = useState([])
  return (
    <div className="App">
      <input placeholder="enter some text"
      onChange ={(e) => {
        setText(e.target.value);
        setHistory([...history, e.target.value]);
      }}

       />
       <h2>Your text is: {text}</h2>
       <hr /><br />
       <ul>
         {history.map((r) => {
           return <div>{r}</div>;
         })}
       </ul>

    </div>
  );
}

export default App;
