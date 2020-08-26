import { takeEvery, put, all } from 'redux-saga/effects'
import axios from 'axios'
import { FETCH_HOME_DATA } from '../store/home/constant'
import {
  changeBannersAction,
  changeRecommendAction,
} from './home/actionCreators'

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
  yield all([takeEvery(FETCH_HOME_DATA, fetchHomeData)])
}

export default mySaga
