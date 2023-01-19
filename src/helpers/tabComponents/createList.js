import UpsertHotelIndex from "@/components/upsert-hotel/UpsertHotelIndex.vue";
import UpsertHotelCategories from "@/components/upsert-hotel/UpsertHotelCategories.vue";
import UpsertHotelPhotos from "@/components/upsert-hotel/UpsertHotelPhotos.vue";
import UpsertHotelContacts from "@/components/upsert-hotel/UpsertHotelContacts.vue";
import Addrress from "@/components/upsert-hotel/UpsertHotelAddress.vue";
import UpsertHotelRooms from "@/components/upsert-hotel/UpsertHotelRooms.vue";
import UpsertHotelLakes from "@/components/upsert-hotel/UpsertHotelLakes.vue";
import UpsertHotelInfo from "@/components/upsert-hotel/UpsertHotelInfo.vue";

export default [
  {
    id: 0,
    name: "index",
    component: UpsertHotelIndex,
    title: "Основные данные",
    filled: false,
    last: false,
  },
  {
    id: 1,
    name: "categories",
    component: UpsertHotelCategories,
    title: "Категории",
    filled: false,
    last: false,
  },
  {
    id: 2,
    name: "photos",
    component: UpsertHotelPhotos,
    title: "Фотографии",
    filled: false,
    last: false,
  },
  {
    id: 3,
    name: "contacts",
    component: UpsertHotelContacts,
    title: "Контактные данные",
    filled: false,
    last: false,
  },
  {
    id: 4,
    name: "address",
    component: Addrress,
    title: "Адрес",
    filled: false,
    last: false,
  },
  {
    id: 5,
    name: "rooms",
    component: UpsertHotelRooms,
    title: "Номера",
    filled: false,
    last: false,
  },
  {
    id: 6,
    name: "lakes",
    component: UpsertHotelLakes,
    title: "Близлежащие водоемы",
    filled: false,
    last: false,
  },
  {
    id: 7,
    name: "info",
    component: UpsertHotelInfo,
    title: "Информация для гостей",
    filled: false,
    last: true,
  },
];
