import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, NavLink } from "react-router-dom";
import './App.css';
import movie from './pages/movie/movie';
import list from './pages/list/list';
import mine from './pages/mine/mine';
import './App.styl';
import moviepng from './assets/movie.png'
import listpng from './assets/list.png'
import minepng from './assets/mine.png'


function App() {
  return (
    <Router>
      <div className="App">
        <div className="tabbar">
          <div className="tabbar-item">
            <NavLink className="nav-link" to="/movie" activeClassName="active">
              <div className="tabbar-image">
                <img alt="" src={moviepng}></img>
              </div>
              <span>电影</span>
              </NavLink>
          </div>
          <div className="tabbar-item">
            <NavLink className="nav-link" to="/list">
            <div className="tabbar-image">
                <img alt="" src={listpng}></img>
              </div>
              <span>榜单</span></NavLink>
          </div>
          <div className="tabbar-item">
            <NavLink className="nav-link" to="/mine">
            <div className="tabbar-image">
                <img alt="" src={minepng}></img>
              </div>
              <span>我的</span></NavLink>
          </div>



        </div>
        <Switch>
          <Route path="/movie" component={movie}></Route>
          <Route path="/list" component={list}></Route>
          <Route path="/mine" component={mine}></Route>
          {/* <Route path="/" component={Recommand}></Route> */}
          <Redirect from="/" to="/movie"></Redirect>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
