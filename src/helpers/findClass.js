import { useRoute } from "vue-router";
import { computed } from "vue";

const routeListLight = [
  'Create',
  'Added',
  'Booking'
]

const routeListGradient = [
  'Home',
  'Found',
  'Popular'
]

export default function findClass () {
  const router = useRoute();
  const checkRoute = computed(() =>{
    console.log(router)
    if (Object.values(routeListLight).includes(router.name)) {
      return 'light'
    }

    if (Object.values(routeListGradient).includes(router.name)) {
      return 'gradient'
    }

    if (router.name === 'Authorization') {
      return 'log-in'
    }

    return ''
  })

  return {checkRoute}
}