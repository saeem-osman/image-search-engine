import React, { Component } from 'react';
import logo from './logo.svg';
class TimeShow extends Component {
constructor(){
    super()
    this.state = {
      time : new Date().toLocaleTimeString()
    }

  }

  componentDidMount(){
    setInterval(()=>{
      this.setState({
        time : new Date().toLocaleTimeString()
      })
      
    },1000)
  }

  render() {
    return (
      <div>
      <h1><b>Time: </b> {this.state.time}</h1>
        
      </div>
    );
  }
}

export default TimeShow;
