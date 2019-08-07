import React, { Component } from 'react';

class Mine extends Component {
  state = {  }
  componentDidMount(){
    document.title = '我的'
  }
  render() { 
      return (  
        <div className="mine-body">
          <div className="user">
            
          </div>
          <div className="mycollectlist">
            
          </div>
        </div>
      );
  }
}

export default Mine;