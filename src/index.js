import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Timer from './CountdownTimer.js'

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      clickcounter: 0,
      hovercounter: 0,
      offsetx: 0,
      offsety: 0,
      timerstarted: 0,
      timertarget: new Date().getTime() + 1000*20,
      moving: false,
    }

  }
  clicky = function(){
    console.log(5);
    this.setState({
      clickcounter: this.state.clickcounter+1,
    })
  }
  movey = function(){
    if (!this.state.moving){
      this.setState({
        moving: true,
      })
      setTimeout(() => {
        this.setState({
          offsetx: Math.random()*500,
          offsety: Math.random()*500,
          hovercounter: this.state.hovercounter+1,
          timerstarted: 1,
          moving: false,
        })
      }, 200)
    
    setTimeout(() => {
    this.setState({
      offsetx: Math.random()*500,
      offsety: Math.random()*500,
      hovercounter: this.state.hovercounter+1,
      timerstarted: 1,
    })}, 25)
  };
  }
  render(){
    
    return (
      
      <div className = "App">
        <div>
          <h4>Hola, you have clicked {this.state.clickcounter} times <br/>
          you have hovered {this.state.hovercounter} times</h4>
        </div>
        <div>
          <h3>Timer</h3>
          <Timer targetDate={this.state.timertarget}/>
        </div>
        <div>
          <Button
          onClick={() => this.clicky()}
          onMove={() => this.movey()}
          offsetx = {this.state.offsetx}
          offsety = {this.state.offsety} />
        </div>
      </div>
    )
  };
}
function Button(props){
  return (
    
    <button className = "button" 
    onMouseDown={props.onClick} 
    onMouseMove = {props.onMove}
    style = {{marginLeft: props.offsetx, marginTop: props.offsety, height: 100}}
    >
      "click me lol"
    </button>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
