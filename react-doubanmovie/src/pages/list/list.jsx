import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom";
import Top250 from './Top250/top250'
import NewTop from './NewTop/newtop'
import NorthTop from './NorthTop/northtop'
import GoodTop from './GoodTop/goodtop'
import './list.styl'

class List extends Component {
  state = {  }
  componentDidMount(){
    document.title = '榜单'
  }
  render() { 
      return (  
        <Router>
        <div className="list">
          <div className="header">
          榜单
          </div>
          <div className="topbar">
            <div className="showtab">
              <div className="tabitem">
                <NavLink className="navlink" to="/Top250" activeClassName="onactive"><span className="tabname">Top250</span></NavLink>
              </div>
              <div className="tabitem">
                <NavLink className="navlink" to="/NewTop" activeClassName="onactive"><span className="tabname">新片榜</span></NavLink>
              </div>
              <div className="tabitem">
                <NavLink className="navlink" to="/NorthTop" activeClassName="onactive"><span className="tabname">北美票房榜</span></NavLink>
              </div>
              <div className="tabitem">
                <NavLink className="navlink" to="/GoodTop" activeClassName="onactive"><span className="tabname">口碑榜</span></NavLink>
              </div>

            </div>
          </div>
          <div className="showmovie-view">
            <Switch>
              {/* 路由 */}
              <Route path="/Top250" component={Top250}></Route>
              <Route path="/NewTop" component={NewTop}></Route>
              <Route path="/NorthTop" component={NorthTop}></Route>
              <Route path="/GoodTop" component={GoodTop}></Route>
              <Redirect from="/" to="/Top250"></Redirect>
            </Switch>
          </div>
          </div>
          </Router>
      );
  }
}

export default List;