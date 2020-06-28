import {request} from './request.js'

export function getDetailDate( iid ) {
  return request({
    url: '/detail',
    params:{
      iid,
    }
  })
}

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
