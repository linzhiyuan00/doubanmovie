const URL = {
  // 首页正在热映电影
  movielistonshowapi:'v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=30',
  // 首页即将上映电影
  movielistwillshowapi:'v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=30&client=&udid=',
  // 电影条目
  // subject/movieid?...
  movieinfoapi1:'v2/movie/subject/',
  movieinfoapi2:'?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid='
}

export default URL;

