import React, { Component } from 'react';
import Scroll from '../../../common/scroll/Scroll';
import Lazyload, { forceCheck } from 'react-lazyload';
import { getmovienorth } from '../../../api/apifun';
import { createMovieListByItem } from '../../../model/movie';

import './northtop.styl';
import Loading from '../../../common/loading/Loading';

import Img from '../../../common/imgerror/Img';
import defaultimg from '../../../assets/defaultimg.png';


class NorthTop extends Component {
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
    getmovienorth().then(res => {
      console.log(res)
      let northlist = res.data.subjects
      console.log("northlist", northlist)
      this.setState({
        northlist,
        show: false
      })
    })
  }
  rendertoplist() {
    const { northlist = [] } = this.state;
    return northlist.map(item => {
      const movie = createMovieListByItem(item.subject)
      const box = item.box;
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
            <div className="box" >
              <span>票房：</span>
              <span className="boxnum" >{box}  $</span>
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
          <div className="northlist">
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

export default NorthTop;