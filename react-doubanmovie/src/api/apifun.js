import URL from "./apiManger";
import axios from './axios'

export function getmovieonshowlist() {
  return axios.get(`${URL.movielistonshowapi}`).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
}

export function getmoviewillshowlist() {
  return axios.get(`${URL.movielistwillshowapi}`).then((res) => {
    return res
  }).catch((err) => {
    return err
  })
}


export function getmovieinfo(movieid){
  return axios.get(`${URL.movieinfoapi1}${movieid}${URL.movieinfoapi2}`).then((res) =>{
    return res
  }).catch((err) =>{
    return err
  })
}