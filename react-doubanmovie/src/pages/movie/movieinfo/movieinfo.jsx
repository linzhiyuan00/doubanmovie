import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import Header from '../../../common/header/Header';
import Scroll from '../../../common/scroll/Scroll';
import { getmovieinfo } from '../../../api/apifun';
import { createMovieDetail } from '../../../model/movieinfo';
import { createcastByItem } from '../../../model/cast';
import './movieinfo.styl'
import star from '../../../assets/star.png';
import halfstar from '../../../assets/halfstar.png';
import nostar from '../../../assets/nostar.png';
import arrow from '../../../assets/arrow.png';



class MovieInfo extends Component {
  state = {
    isShow: false,
    movieinfo: {}
  }
  ifonshow(rating) {
    if (rating == 0) {
      return false
    } else {
      return true
    }
  }
  getImage(url) {
    // 把现在的图片连接传进来，返回一个不受限制的路径
    if (url !== undefined) {
      return url.replace(/^(http)[s]*(\:\/\/)/, 'https://images.weserv.nl/?url=');
    }
  }
  componentDidMount = () => {
    const id = this.props.match.params.id;
    console.log("movieid", id)
    getmovieinfo(id).then((res) => {
      console.log("movieinfo", res.data)
      let movieinfo = createMovieDetail(res.data)
      this.setState({
        movieinfo,
        castlist: movieinfo.casts
      })
    })
    this.setState({
      isShow: true
    })

  }
  rendercastlist = () => {
    const { castlist = [] } = this.state;
    return castlist.map(item => {
      const cast = createcastByItem(item);
      return (
        <div className="cast" key={cast.id}>
          <div className="castimg">
            <img src={this.getImage(cast.avatars)} width="65px" height="90px" alt="" />
          </div>
          <div className="castname">
            {cast.name}
          </div>
        </div>
      )
    })
  }
  render() {
    const { movieinfo } = this.state;
    const movieimage = this.getImage(movieinfo.images)
    console.log(movieinfo)
    return (
      <CSSTransition in={this.state.isShow} timeout={2000} classNames="translate">
        <div className="movie-detail">
          <Header title={movieinfo.title} ref="header"></Header>
              <div className="movieinfo-bg" style={{ position: "absolute" }}>
                <div className="bgimg">
                  <img src={this.getImage(movieinfo.images)} alt="" />
                </div>
              </div>
              <div className="movie-body" style={{ backgroundImage:`url(${movieinfo.images})`}} >
                <div className="movie-top">
                  <div className="left">
                    <img src={this.getImage(movieinfo.images)} alt="" />
                  </div>
                  <div className="right">
                    <div className="title">{movieinfo.title}</div>
                    <div className="titleaka">{movieinfo.aka}</div>
                    <div className="rating">
                      <div className="movierating" style={{ display: this.ifonshow(movieinfo.rating) ? 'inline-block' : 'none' }} >
                        <span><img src={movieinfo.rating < 0.5 ? nostar : movieinfo.rating > 1.5 ? star : halfstar} alt="" /></span>
                        <span><img src={movieinfo.rating < 2.5 ? nostar : movieinfo.rating > 3.5 ? star : halfstar} alt="" /></span>
                        <span><img src={movieinfo.rating < 4.5 ? nostar : movieinfo.rating > 5.5 ? star : halfstar} alt="" /></span>
                        <span><img src={movieinfo.rating < 6.5 ? nostar : movieinfo.rating > 7.5 ? star : halfstar} alt="" /></span>
                        <span><img src={movieinfo.rating < 8.5 ? nostar : movieinfo.rating > 9.5 ? star : halfstar} alt="" /> </span>
                        <span> {movieinfo.rating}</span>
                      </div>
                      <div className="wantsee" style={{ display: this.ifonshow(movieinfo.rating) ? 'none' : 'inline-block' }}>
                        <span className="peoplenum">{movieinfo.wish_count}</span>
                        <span className="wantseetext">人想看</span>
                      </div>
                    </div>
                    <div className="genres">{movieinfo.genres}</div>
                    <div className="dur-place">
                      <span>{movieinfo.countries} / </span>
                      <span>{movieinfo.durations}</span>
                    </div>
                    <div className="pubdate">{movieinfo.pubdate} 上映</div>
                  </div>
                </div>
                <div className="movie-container">
                  <div className="movie-summary">
                    <div className="buybtn">收藏</div>
                    <div className="introduce">
                      <input type="checkbox" id="introduce" />
                      <p>{movieinfo.summary}</p>
                      <label htmlFor="introduce"><img src={arrow} alt="" /></label>
                    </div>
                  </div>
                  <div className="casttitle">主演：</div>
                  <div className="castlist">
                    {
                      this.rendercastlist()
                    }
                  </div>
                </div>
              </div>
        </div >
      </CSSTransition >
    );
  }
}

export default MovieInfo;