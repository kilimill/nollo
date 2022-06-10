import {ProfileIcon, CalendarIcon, HeartIcon, HomeIcon} from '@/layout/icon/index'
import PersonalData from "@/components/profile/PersonalData"
import Favorites from "@/components/profile/Favorites"
import Places from "@/components/profile/Places"
import ProfileBooking from "@/components/profile/ProfileBooking";

export default [
  {
    id: 1,
    name: PersonalData,
    title: 'Данные профиля',
    icon: ProfileIcon
  },
  {
    id: 2,
    name: Favorites,
    title: 'Избранное',
    icon: HeartIcon
  },
  {
    id: 3,
    name: Places,
    title: 'Мои турбазы',
    icon:  HomeIcon
  },
  {
    id: 4,
    name: ProfileBooking,
    title: 'Бронирования',
    icon:  CalendarIcon
  },
]