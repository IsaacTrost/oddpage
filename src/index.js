import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends React.Component{
  
  render(){
    var counter=0;
    return (
      
      <div className = "App">
        <h1>Hola, youve clicked {counter} times</h1>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);