import {request} from './request.js'

export function getCategory() {
  return request({
    url: '/category',
  })
}

