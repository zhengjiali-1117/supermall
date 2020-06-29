import {request} from './request.js'

export function getDetailDate( iid ) {
  return request({
    url: '/detail',
    params:{
      iid,
    }
  })
}
<<<<<<< HEAD
//详情页商品信息
=======

>>>>>>> b8c4b7889a78743a0c4d7c91854c5307e3da8bdd
export class GoodsInfo{
  constructor( itemInfo, columns, service ){
    this.title = itemInfo.title
    this.desc = itemInfo.desc
    this.newPrice = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.service = service
    this.realPrice = itemInfo.lowNowPrice
  }
}
<<<<<<< HEAD



//详情页商家信息
export class Shop {
	constructor(shopInfo) {
		this.logo = shopInfo.shopLogo;
		this.name = shopInfo.name;
		this.fans = shopInfo.cFans;
		this.sells = shopInfo.cSells;
		this.score = shopInfo.score;
		this.goodsCount = shopInfo.cGoods
	}
}

//获取详情页参数
export class GoodsParam {
	constructor(info, rule) {
		// 注: images可能没有值(某些商品有值, 某些没有值)
		this.image = info.images ? info.images[0] : '';
		this.infos = info.set;
		this.sizes = rule.tables;
	}
}
=======
>>>>>>> b8c4b7889a78743a0c4d7c91854c5307e3da8bdd
