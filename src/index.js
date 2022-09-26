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
      timergoing: 1,
      timertarget: new Date().getTime() + 200*20,
      moving: false,
    }

  }
  clicky = function(){
    console.log(5);
    this.setState({
      clickcounter: this.state.clickcounter+1,
    })
  }
  endTimer = function(){
    this.setState({
      timergoing: 0,
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
          <Timer targetDate={this.state.timertarget} endTimer = {() => this.endTimer()}/>
        </div>
        <div>
          <Game
          onClick={() => this.clicky()}
          onMove={() => this.movey()}
          offsetx = {this.state.offsetx}
          offsety = {this.state.offsety} 
          timerrunning = {new Date().getTime() < this.state.timertarget}/>
        </div>
      </div>
    )
  };
}

function Game(props){
  if(props.timerrunning){
  return (
    <div className = "game">
      <Button 
      onClick={() => props.onClick()}
      onMove={() => props.onMove()}
      offsetx = {props.offsetx}
      offsety = {props.offsety}/>
    </div>
  );
  } else{
      return (
        <div className = "game">
          <h1>Your done bozo</h1>
        </div>);
    }
}

function Button(props){
  return (
    
    <button className = "button" 
    onMouseDown= {props.onClick} 
    onMouseEnter = {props.onMove}
    style = {{marginLeft: props.offsetx, marginTop: props.offsety, height: 100}}
    >
      "click me lol"
    </button>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
