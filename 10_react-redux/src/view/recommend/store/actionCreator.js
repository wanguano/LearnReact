import * as actionTypes from './actionTypes'
const changeTopBannersAction = res => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res
})

// 发送网络请求
export const getTopBannersAction = () => {
  return dispatch => {
    // 派发action
    dispatch(changeTopBannersAction({ name: '轮播图1' }, { name: '轮播图2' }))
  }
}