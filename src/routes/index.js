import SwiperScreen from '../screens/SwiperScreen'
import TheNavbar from '../components/navbar/TheNavbar'

export const routes = [
  { path: '/', components: { default: SwiperScreen, navbar: TheNavbar }},
  // { path: '/login', components: {default: Login, footer: Footer }}, 
  // { path: '/regcode', components: {default: RegCode, footer: Footer }},
  // { path: '/setuserdata', components: {default: SetUserData, footer: Footer }},
  // { path: '/settings', components: {default: Settings, header: Header}},
  // { path: '/archive-list', components: {default: ArchiveList, header: Header}}, 
]