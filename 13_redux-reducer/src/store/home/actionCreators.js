import axios from 'axios'
// 派发actions,函数返回一个对象
import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
  FETCH_HOME_DATA,
} from './constant.js'

export const changeBannersAction = banners => ({
  type: CHANGE_BANNERS,
  banners,
})

export const changeRecommendAction = recommends => ({
  type: CHANGE_RECOMMENDS,
  recommends,
})

// redux-thunk中定义的action函数
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

// redux-saga拦截的action
export const fetchHomeData = {
  type: FETCH_HOME_DATA,
}
