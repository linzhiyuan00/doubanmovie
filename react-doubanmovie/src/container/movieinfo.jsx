import React, { Component } from 'react';
import { connect } from 'react-redux';
import MovieInfo from '../pages/movie/movieinfo/movieinfo';
import { changeCollect,delCollect } from '../redux/action';

const mapStateToProps = state =>{
  return {
    showcollect:state.showcollect
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {
    changecollectstatetoture:(id) =>{
      dispatch(changeCollect(id))
    },
    changecollectstatetofalse:(id) => {
      dispatch(delCollect(id))
    }
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(MovieInfo); 