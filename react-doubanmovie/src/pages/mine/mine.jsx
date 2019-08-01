import React, { Component } from 'react';

class Mine extends Component {
  state = {  }
  componentDidMount(){
    document.title = '我的'
  }
  render() { 
      return (  
        <div>
          <div className="header">
          我的
        </div>
        我的
        </div>
      );
  }
}

export default Mine;