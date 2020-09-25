import * as actionTypes from './actionTypes'
// 定义recommend组件的reducer
const defaultState = {
  topBanners: [],
}

export function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return { ...state, topBanners: action.topBanners }
    default:
      return { ...state }
  }
}
