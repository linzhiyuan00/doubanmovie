import React, { Component } from 'react';
import Scroll from '../../../common/scroll/Scroll';
import Lazyload, { forceCheck } from 'react-lazyload';

class Top250 extends Component {
  state = {
    refreshScroll: false
  }
  render() {
    const {refreshScroll } = this.state
    return (
      <div className="top250">
        <Scroll refresh={refreshScroll}
          onScroll={forceCheck}
        >
          <div className="toplist">

          </div>
        </Scroll>
      </div>
    );
  }
}

export default Top250;