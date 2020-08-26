// 纯函数
import {
  CHANGE_BANNERS,
  CHANGE_RECOMMENDS,
} from './constant.js'


const initialHomeState = {
  banners: [],
  recommends: [],
}

function homeReducer(state = initialHomeState, action) {
  switch (action.type) {
    case CHANGE_BANNERS:
      return { ...state, banners: action.banners }
    case CHANGE_RECOMMENDS:
      return { ...state, recommends: action.recommends }
    default:
      return state
  }
}

export default homeReducer