import {
  ProfileIcon,
  CalendarIcon,
  HeartIcon,
  HomeIcon,
  // MailIcon,
} from "@/layout/icon/index";
import ProfileData from "@/components/profile/ProfileData.vue";
import ProfileFavorites from "@/components/profile/ProfileFavorites.vue";
import ProfileHotels from "@/components/profile/ProfileHotels.vue";
import ProfileBooking from "@/components/profile/ProfileBooking.vue";
// import ProfileMessages from "@/components/profile/ProfileMessages";

export default [
  {
    id: 0,
    name: ProfileData,
    title: "Данные профиля",
    icon: ProfileIcon,
  },
  {
    id: 1,
    name: ProfileFavorites,
    title: "Избранное",
    icon: HeartIcon,
  },
  {
    id: 2,
    name: ProfileHotels,
    title: "Мои турбазы",
    icon: HomeIcon,
  },
  {
    id: 3,
    name: ProfileBooking,
    title: "Бронирования",
    icon: CalendarIcon,
  },
  // {
  //   id: 4,
  //   name: ProfileMessages,
  //   title: "Сообщения",
  //   icon: MailIcon,
  // },
];
