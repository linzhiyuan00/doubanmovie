import React, { Component } from 'react';
import Lazyload , { forceCheck } from 'react-lazyload';
import { Route } from 'react-router-dom';
import Scroll from '../../../common/scroll/Scroll';
import { getmovieonshowlist } from '../../../api/apifun';
import { createMovieListByItem } from '../../../model/movie'
import Loading from '../../../common/loading/Loading';
import Img from '../../../common/imgerror/Img';
import defaultimg from '../../../assets/defaultimg.png';


import './onshow.styl';
import MovieInfo from '../../../container/movieinfo';



class OnShow extends Component {
  state = {
    show: true,
    movielist: [],
    refreshScroll: false
  }
  getImage(url){
    // 把现在的图片连接传进来，返回一个不受限制的路径
    if(url !== undefined){
      return url.replace(/^(http)[s]*(\:\/\/)/,'https://images.weserv.nl/?url=');
    }
  }
  ifonshow(rating){
    if(rating == 0) {
      return false
    }else{
      return true
    }
  }
  handleToMovieDetail(url){
    return () =>{
      this.props.history.push({
        pathname:url
      })
    }
  }
  componentDidMount() {
    getmovieonshowlist().then(res => {
      let movielist = res.data.subjects
      console.log("movieonshowlist", movielist)
      this.setState({
        movielist,
        show: false
      })
    })
  }
  renderMovielist() {
    const { movielist = [] } = this.state;
    const { match } = this.props; 
    return movielist.map(item => {
      const movie = createMovieListByItem(item);
      return (
        <div className="movie-wrapper" key={movie.id}
        onClick={this.handleToMovieDetail(`${match.url}/${movie.id}`)}
        >
          <div className="left">
            <Lazyload>
              <Img imageUrl={this.getImage(movie.img)} defaultImg={defaultimg}  alt="" />
            </Lazyload>
          </div>
          <div className="right">
            <div className="moviename">
              {movie.name}
            </div>
            <div className="rating" style={{display: this.ifonshow(movie.rating) ? 'inline-block' : 'none'}}>
              <span className="ratingtext">观众评</span>
              <span className="ratingnum">{movie.rating}</span>
            </div>
            <div className="wantsee" style={{display: this.ifonshow(movie.rating) ? 'none' : 'inline-block'}}>
              <span className="peoplenum">{movie.count}</span>
              <span className="wantseetext">人收藏</span>
            </div>
            <div className="casts">
              主演:{movie.casts}
            </div>
            <div className="genres">
              {movie.genres}
            </div>
          </div>
          <div className="buy">
            <div className="onshowbtn" style={{display: this.ifonshow(movie.rating) ? 'inline-block' : 'none'}}>想看</div>
            <div className="willshowbtn" style={{display: this.ifonshow(movie.rating) ? 'none' : 'inline-block'}}>预售</div>
          </div>
        </div>
      )
    })
  }
  render() {
    const { refreshScroll } = this.state;
    const { match } = this.props; 
    return (
      <div className="onshow">
        {/* <Scroll refresh={refreshScroll}
        onScroll={forceCheck}
        > */}
          <div className="movielist">
            {
              this.renderMovielist()
            }
          </div>
        {/* </Scroll> */}
        <Loading title="正在加载中..." show={this.state.show} />
        <Route path={`${match.url}/:id`} component={MovieInfo}></Route>
      </div>
    );
  }
}

export default OnShow;