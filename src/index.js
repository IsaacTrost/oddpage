import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {
      clickcounter: 0,
      hovercounter: 0,
      offsetx: 0,
      offsety: 0,
      timerstarted: 0,
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
    
  }
  }
  render(){
    
    return (
      
      <div className = "App">
        <div>
          <h4>Hola, you have clicked {this.state.clickcounter} times <br/>
          you have hovered {this.state.hovercounter} times</h4>
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
  }
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

function Timer(props){
  const [timer, setTimer] = React.useState('00:00:00')
  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    return {
        total, hours, minutes, seconds
    };
}
const startTimer = (e) => {
  let { total, hours, minutes, seconds } 
              = getTimeRemaining(e);
  if (total >= 0) {

      // update the timer
      // check if less than 10 then we need to 
      // add '0' at the beginning of the variable
      setTimer(
          (hours > 9 ? hours : '0' + hours) + ':' +
          (minutes > 9 ? minutes : '0' + minutes) + ':'
          + (seconds > 9 ? seconds : '0' + seconds)
      )
  }
}

}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
