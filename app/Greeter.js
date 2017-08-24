import React, {Component} from 'react'
import config from './config.json';
import './Greeter.css'
class Greeter extends Component{
  render() {
    return (
      <div className="color">
        212121
        {config.greetText}
      </div>
    );
  }
}

export default Greeter

