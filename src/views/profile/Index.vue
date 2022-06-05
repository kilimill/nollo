<template lang="pug">
section.profile
  .container
    .wrapper.wrapper-h-btw
      Aside
      //- PersonalData
      .profile__content
        //- PersonalData
        Favorites
        //- ProfileBooking
</template>

<script setup>
import Aside from "@/layout/Aside";
// import PersonalData from "@/components/profile/PersonalData"
import Favorites from "@/components/profile/Favorites"
// import Places from "@/components/profile/Places"
// import ProfileBooking from "@/components/profile/ProfileBooking";
</script>

<style scoped lang='stylus'>
.profile {
  &__content {
    width: 100%;
  }
}
</style>