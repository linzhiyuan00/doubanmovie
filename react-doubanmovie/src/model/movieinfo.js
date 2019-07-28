class MovieInfo{
  constructor(id,title,aka,rating,blooper_urls,bloopers,casts,
    collect_count,comments_count,countries,durations,genres,
    images,languages,photos,pubdate,summary,wish_count,writers){
      this.id = id;
      this.title = title;
      this.aka = aka;
      this.rating = rating;
      this.blooper_urls = blooper_urls;
      this.bloopers = bloopers;
      this.casts = casts;
      this.collect_count = collect_count;
      this.comments_count = comments_count;
      this.countries = countries;
      this.durations = durations;
      this.genres = genres;
      this.images = images;
      this.languages = languages;
      this.photos = photos;
      this.pubdate = pubdate;
      this.summary = summary;
      this.wish_count = wish_count;
      this.writers = writers;
  }
}

export function createMovieDetail(detail){
  //   aka: ["Looking Up"]
  // alt: "https://movie.douban.com/subject/30282387/"
  // blooper_urls: (4) ["http://vt1.doubanio.com/201907181118/3858e0cb657851402e3688bdf929a896/view/movie/M/302490870.mp4", "http://vt1.doubanio.com/201907181118/8ff36185645930c81d5fcbc2bc925a39/view/movie/M/302480994.mp4", "http://vt1.doubanio.com/201907181118/7cb7f21221156cdcc647af99194fe61f/view/movie/M/302480993.mp4", "http://vt1.doubanio.com/201907181118/08e5900dbbd10fedb1942166544ece69/view/movie/M/302470486.mp4"]
  // bloopers: (4) [{…}, {…}, {…}, {…}]
  // casts: (4) [{…}, {…}, {…}, {…}]
  // clip_urls: []
  // clips: []
  // collect_count: 27190
  // collection: null
  // comments_count: 13370
  // countries: ["中国大陆"]
  // current_season: null
  // directors: (2) [{…}, {…}]
  // do_count: null
  // douban_site: ""
  // durations: ["147分钟"]
  // episodes_count: null
  // genres: ["剧情"]
  // has_schedule: true
  // has_ticket: true
  // has_video: false
  // id: "30282387"
  // images: {small: "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561542089.jpg", large: "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561542089.jpg", medium: "http://img3.doubanio.com/view/photo/s_ratio_poster/public/p2561542089.jpg"}
  // languages: ["汉语普通话"]
  // mainland_pubdate: "2019-07-18"
  // mobile_url: "https://movie.douban.com/subject/30282387/mobile"
  // original_title: "银河补习班"
  // photos: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // photos_count: 380
  // popular_comments: (4) [{…}, {…}, {…}, {…}]
  // popular_reviews: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
  // pubdate: "2019-07-18"
  // pubdates: (2) ["2019-07-13(大规模点映)", "2019-07-18(中国大陆)"]
  // rating: {max: 10, average: 6.3, details: {…}, stars: "35", min: 0}
  // ratings_count: 26055
  // reviews_count: 842
  // schedule_url: "https://movie.douban.com/subject/30282387/cinema/"
  // seasons_count: null
  // share_url: "http://m.douban.com/movie/subject/30282387"
  // subtype: "movie"
  // summary: "浩瀚太空，航天员意外失联，生命最大的绝境中，他回忆起自己那个最了不起的爸爸。一对父子跨越漫长的时光，守护爱和亲情，故事充满了欢乐、温暖、泪水与奇观。"
  // tags: (10) ["邓超", "温情", "国产电影", "2019", "白宇", "电影", "大陆", "任素汐", "教育", "年代剧"]
  // title: "银河补习班"
  // trailer_urls: (4) ["http://vt1.doubanio.com/201907181118/62731f6cd03efbbaee507845b4b3be9a/view/movie/M/302490934.mp4", "http://vt1.doubanio.com/201907181118/9c9028628c91cb367cf686956240030f/view/movie/M/302490575.mp4", "http://vt1.doubanio.com/201907181118/4f680d146cb4601aeff53d5dd35c3984/view/movie/M/302490393.mp4", "http://vt1.doubanio.com/201907181118/ec5cad31082844ec0ab2efc660953664/view/movie/M/302480335.mp4"]
  // trailers: (4) [{…}, {…}, {…}, {…}]
  // videos: []
  // website: ""
  // wish_count: 28571
  // writers: [{…}]
  // year: "2019"
    return new MovieInfo(
      detail.id,
      detail.title,
      detail.aka[0],
      detail.rating.average, 
      detail.blooper_urls,
      detail.bloopers,
      detail.casts,
      detail.collect_count ,
      detail.comments_count,
      detail.countries[0],
      detail.durations[0],
      detail.genres.map(genres =>genres).join(' '),
      detail.images.small,
      detail.languages,
      detail.photos,
      detail.pubdate,
      detail.summary,
      detail.wish_count,
      detail.writers
    )
  }