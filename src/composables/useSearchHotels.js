import { reactive, } from "vue";

const searchHotels = reactive({
  tags: [],
  location: null,
  sort_field: "distance_city",
  sort_direction: "asc",
});

const sortArr = [
  {
    id: 0,
    text: "по удаленности",
    name: "distance_city",
  },
  {
    id: 1,
    text: "по новизне",
    name: "created_at",
  },
];

export { searchHotels, sortArr };
