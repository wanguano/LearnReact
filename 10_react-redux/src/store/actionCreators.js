import axios from 'axios'
// 派发actions,函数返回一个对象
import {
  ADD_NUMBER,
  SUB_NUMBER,
  INCREMENT,
  DECREMENT,
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
} from './constant.js'

// export function addAction(num) {
//   return { type: 'ADD_NUMBER', num }
// }

// export const addAction = num => {
//   return {type: 'ADD_NUMBER', num} 
// }

export const addAction = num => ({ type: ADD_NUMBER, num })
export const subAction = num => ({ type: SUB_NUMBER, num })
export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })

//----提交action来改变state---------

export const changeBannersAction = banners => ({
  type: CHANGE_BANNERS,
  banners,
})

export const changeRecommendAction = recommends => ({
  type: CHANGE_RECOMMENDS,
  recommends,
})

// redux-thunk
export const getHomeDate = (dispatch, getState) => {
  // console.log('----redux-thunk----')
  axios({
    url: 'http://123.207.32.32:8000/home/multidata',
  }).then(value => {
    const data = value.data.data
    dispatch(changeBannersAction(data.banner.list))
    dispatch(changeRecommendAction(data.recommend.list))
  })
}
