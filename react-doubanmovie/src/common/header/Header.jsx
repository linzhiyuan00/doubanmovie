import React, { Component } from 'react';
import './header.styl';
import backpng from '../../assets/back.png';
class Header  extends Component {
  state = {  }
  handleback = () =>{
    // if(this.props.history){
    //   this.props.history.pop();
    // }
    // <Route path="*" component>
    window.history.back();
    console.log('返回')
  }
  render() { 
    console.log('操你妈')
      return ( 
        <div className="music-header">
          <span className="header-back" onClick={this.handleback}>
            <i className="icon-back">
              <img src={backpng} alt=""/>
            </i>
          </span>
          <div className="header-title">
            { this.props.title }
          </div>
        </div>
       );
  }
}

export default Header;