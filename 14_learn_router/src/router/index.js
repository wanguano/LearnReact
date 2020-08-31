import Home from '../pages/home'
import About, {
  AboutHistory,
  AboutCulture,
  AboutJoin,
  AboutConnect,
} from '../pages/about'
import User from '../pages/user'
import Detail from '../pages/detail'
import Profile from '../pages/profile'
import Detail2 from '../pages/detail2'
import Detail3 from '../pages/detail3'

const routes = [
  { path: '/', component: Home, exact: true },
  {
    path: '/about',
    component: About,
    route: [
      { path: '/about', component: AboutHistory, exact: true },
      {
        path: '/about/culture',
        component: AboutCulture,
      },
      {
        path: '/about/connect',
        component: AboutConnect,
      },
      {
        path: '/about/join',
        component: AboutJoin,
      },
    ],
  },
  { path: '/user', component: User },
  { path: '/profile', component: Profile },
  { path: '/detail/:id', component: Detail },
  { path: '/detail2', component: Detail2 },
  { path: '/detail3', component: Detail3 },
]

export default routes
