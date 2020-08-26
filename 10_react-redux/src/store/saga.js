import { takeEvery, put, all, takeLatest } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_HOME_DATA } from './constant'
import { changeBannersAction, changeRecommendAction } from './actionCreators'

function* fetchHomeData(action) {
  const res = yield axios.get('http://123.207.32.32:8000/home/multidata')
  const banners = res.data.data.banner.list
  const recommends = res.data.data.recommend.list
  // dispatch action 提交action,redux-sage提供了put
  // yield put(changeBannersAction(banners))
  // yield put(changeRecommendAction(recommends))
  yield all([
    yield put(changeBannersAction(banners)),
    yield put(changeRecommendAction(recommends)),
  ])
}

function* mySaga() {
  // 参数一:要拦截的action
  // 参数二:生成器函数
  // yield takeEvery(FETCH_HOME_DATA, fetchHomeData)
  // takeLatest takeEvery区别:
  // takeLatest: 一次只能监听一个对应的action
  // takeEvery: 每一个都会被执行
  yield all([
    takeLatest(FETCH_HOME_DATA, fetchHomeData),
    // takeLatest(ADD_NUMBER, fetchHomeData)
  ])
}

export default mySaga
