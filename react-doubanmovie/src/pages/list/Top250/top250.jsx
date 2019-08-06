import React, { Component } from 'react';
import Scroll from '../../../common/scroll/Scroll';
import Lazyload, { forceCheck } from 'react-lazyload';
import { getmovietop250 } from '../../../api/apifun';
import { createMovieListByItem } from '../../../model/movie';

import './top250.styl';
import star from '../../../assets/star.png';
import halfstar from '../../../assets/halfstar.png';
import nostar from '../../../assets/nostar.png';
import Loading from '../../../common/loading/Loading';

import Img from '../../../common/imgerror/Img';
import defaultimg from '../../../assets/defaultimg.png';

class Top250 extends Component {
  state = {
    show: true,
    refreshScroll: false
  }
  getImage(url) {
    // 把现在的图片连接传进来，返回一个不受限制的路径
    if (url !== undefined) {
      return url.replace(/^(http)[s]*(\:\/\/)/, 'https://images.weserv.nl/?url=');
    }
  }
  ifonshow(rating) {
    if (rating == 0) {
      return false
    } else {
      return true
    }
  }
  componentDidMount() {
    getmovietop250().then(res => {
      let top250list = res.data.subjects
      console.log("movietop250list", top250list)
      this.setState({
        top250list,
        show: false
      })
    })
  }
  rendertoplist() {
    const { top250list = [] } = this.state;
    return top250list.map(item => {
      const movie = createMovieListByItem(item)
      return (
        <div className="movietop250list" key={movie.id}>
          <div className="left">
            <Lazyload>
              <Img imageUrl={this.getImage(movie.img)} defaultImg={defaultimg} alt="" />
            </Lazyload>
          </div>
          <div className="right">
            <div className="moviename">
              {movie.name}
            </div>
            <div className="rating" >
              <span><img src={movie.rating < 0.5 ? nostar : movie.rating > 1.5 ? star : halfstar} alt="" /></span>
              <span><img src={movie.rating < 2.5 ? nostar : movie.rating > 3.5 ? star : halfstar} alt="" /></span>
              <span><img src={movie.rating < 4.5 ? nostar : movie.rating > 5.5 ? star : halfstar} alt="" /></span>
              <span><img src={movie.rating < 6.5 ? nostar : movie.rating > 7.5 ? star : halfstar} alt="" /></span>
              <span><img src={movie.rating < 8.5 ? nostar : movie.rating > 9.5 ? star : halfstar} alt="" /> </span>
              <span> {movie.rating}</span>
            </div>
            <div className="casts">
              主演:{movie.casts}
            </div>
            <div className="genres">
              {movie.genres}
            </div>
          </div>
          <div className="buy">
            <div className="willshowbtn">收藏</div>
          </div>
        </div>
      )
    })
  }
  render() {
    const { refreshScroll } = this.state
    return (
      <div className="movielist">
        <Scroll refresh={refreshScroll}
          onScroll={forceCheck}
        >
          <div className="toplist">
            {
              this.rendertoplist()
            }
          </div>
        </Scroll>
        <Loading title="正在加载中..." show={this.state.show} />
      </div>
    );
  }
}

export default Top250;