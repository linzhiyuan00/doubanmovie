const URL = {
  // 首页正在热映电影
  movielistonshowapi:'v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=30',
  // 首页即将上映电影
  movielistwillshowapi:'v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=30&client=&udid=',
  // 电影条目详情
  // subject/movieid?...
  movieinfoapi1:'v2/movie/subject/',
  movieinfoapi2:'?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid=',
  // 榜单
  // Top250
  movietop250:'v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=30&client=&udid=',
  //口碑榜
  moviegoods:'v2/movie/weekly?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&client=&udid=',
  //北美票房榜
  movienorth:'v2/movie/us_box?apikey=0b2bdeda43b5688921839c8ecb20399b&client=&udid=',
  //新片榜
  movienew:'v2/movie/new_movies?apikey=0b2bdeda43b5688921839c8ecb20399b&client=&udid='
}

export default URL;

