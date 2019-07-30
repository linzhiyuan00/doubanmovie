import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom";
import OnShow from './onshow/onshow';
import WillShow from './willshow/willshow';
import Search from './search/search';
import searchpng from '../../assets/search.png';
import './movie.styl'

class Movie extends Component {
  constructor(props) {
    super(props)
    this.state = {
      refreshScroll: false
    }
  }
  render() {
    const { refreshScroll } = this.state
    return (
      <Router>
        <div className="movie">
          <div className="header">
            豆瓣电影
        </div>
          <div className="topbar">
            <div className="showtab">
              <div className="tabitem">
                <NavLink className="navlink" to="/" ><span className="city">城市</span></NavLink>
              </div>
              <div className="tabitem">
                <NavLink className="navlink" to="/OnShow" activeClassName="onactive"><span className="tabname">正在热映</span></NavLink>
              </div>
              <div className="tabitem">
                <NavLink className="navlink" to="/WillShow" activeClassName="onactive"><span className="tabname">即将上映</span></NavLink>
              </div>
              <div className="tabitem">
                <NavLink className="navlink" to="/Search" activeClassName="searchactive" ><span className="search"><img src={searchpng} alt=""/></span></NavLink>
              </div>

            </div>
          </div>
          <div className="showmovie-view">
            <Switch>
              {/* 路由 */}
              <Route path="/OnShow" component={OnShow}></Route>
              <Route path="/WillShow" component={WillShow}></Route>
              <Route path="/Search" component={Search}></Route>
              <Redirect from="/" to="/OnShow"></Redirect>
            </Switch>
          </div>
        </div>

      </Router>
    );
  }
}

export default Movie;