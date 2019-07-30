class Cast{
  constructor(alt,avatars,id,name,name_en){
    this.alt = alt;
    this.avatars = avatars;
    this.id = id;
    this.name = name;
    this.name_en = name_en;
  }
}
// 0:
// alt: "https://movie.douban.com/celebrity/1419996/"
// avatars: {small: "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1564150860.79.jpg", large: "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1564150860.79.jpg", medium: "http://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1564150860.79.jpg"}
// id: "1419996"
// name: "吕艳婷"
// name_en: "Yanting Lü"
// __proto__: Object
// 1: {avatars: {…}, name_en: "Joseph", name: "囧森瑟夫", alt: "https://movie.douban.com/celebrity/1400125/", id: "1400125"}
// 2: {avatars: {…}, name_en: "Mo Han", name: "瀚墨", alt: "https://movie.douban.com/celebrity/1400124/", id: "1400124"}
// 3: {avatars: {…}, name_en: "Hao Chen", name: "陈浩", alt: "https://movie.douban.com/celebrity/1329520/", id: "1329520"}
// length: 4

export function createcastByItem(item) {
  return new Cast(
    item.alt,
    item.avatars.small,
    item.id,
    item.name,
    item.name_en
  )
}