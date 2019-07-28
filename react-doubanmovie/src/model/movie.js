class Movie{
  constructor(id,name,img,rating,casts,durations,year,count,genres){
      this.id = id;
      this.name = name;
      this.img = img;
      this.rating = rating;
      this.casts = casts;
      this.durations = durations;
      this.year = year;
      this.count = count;
      this.genres = genres;
  }
}

export function createMovieListByItem(item) {
//   0:
// alt: "https://movie.douban.com/subject/30282387/"
// casts: (3) [{…}, {…}, {…}]
// collect_count: 12576
// directors: (2) [{…}, {…}]
// durations: ["147分钟"]
// genres: ["剧情"]
// has_video: false
// id: "30282387"
// images: {small: "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561542089.jpg", large: "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561542089.jpg", medium: "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561542089.jpg"}
// mainland_pubdate: "2019-07-18"
// original_title: "银河补习班"
// pubdates: (2) ["2019-07-13(大规模点映)", "2019-07-18(中国大陆)"]
// rating: {max: 10, average: 6.5, details: {…}, stars: "35", min: 0}
// subtype: "movie"
// title: "银河补习班"
// year: "2019"
  return new Movie(
    item.id,
    item.title,
    item.images.small,
    item.rating.average,
    item.casts.map(cast =>cast.name).join("/"),
    item.durations,
    item.year,
    item.collect_count,
    item.genres.map(genres =>genres).join(' ')
  )
}

