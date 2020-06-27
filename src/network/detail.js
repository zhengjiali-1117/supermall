import {request} from './request.js'

export function getDetailDate( iid ) {
  return request({
    url: '/detail',
    params:{
      iid
    }
  })
}
