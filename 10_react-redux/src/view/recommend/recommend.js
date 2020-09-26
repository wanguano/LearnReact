import React, { memo } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getTopBannersAction } from './store/actionCreator'

function Recommend() {
  // const { topBanners } = useSelector(state => {
  //   topBanners: state.recommend.topBanners
  // })
  const { topBanners } = useSelector(state => ({
    topBanners: state.recommend.topBanners,
  }))
  // useDispatch
  const dispatch = useDispatch()
  console.log(topBanners)
  
  return (
    <div>
      <h2>Recommend</h2>
      <button
        onClick={() => {
          dispatch(getTopBannersAction())
        }}
      >
        dispatch ChangeTopBanners action
      </button>
    </div>
  )
}

export default memo(Recommend)

// function Recommend(props) {
//   const { topBanners } = props
//   // 1.先使用connect方式: 获取state和dispatch派发的action
//   useEffect(() => {
//     console.log(topBanners)
//   }, [topBanners])
//   return (
//     <div>
//       <h2>Recommend</h2>
//       <button onClick={() => props.getTopBanners()}>
//         dispatch ChangeTopBanners action
//       </button>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners: state.recommend.topBanners,
// })

// const mapDispatchToProps = dispatch => ({
//   getTopBanners() {
//     // thunk: 可以让dispatch的action是一个函数
//     dispatch(getTopBannersAction())
//   },
// })

// export default connect(mapStateToProps, mapDispatchToProps)(memo(Recommend))
