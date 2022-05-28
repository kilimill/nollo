<template lang="pug">
header.header
  .container
    .header__inner
      .header__wrapper
        .header__wrapper
          a.logo.logo_black(href="#")
            img.logo__img(src="@/assets/img/logo.png")

          p.controls_middle.header__text Найди идеальное место для своего отдыха

        .header__location
          p.controls_middle.location Москва

      .header__wrapper
        .header__profile
          //- .header__profile-default
          //-   p.controls_middle.header__profile Профиль

          .header__wrapper.header__profile-user 
            img.header__profile-avatar(src="@/assets/img/avatar.jpg")
            p.controls_middle.ml-16 Александр Р.
        

</template>

<script setup>
  
</script>

<style scoped lang='stylus'>
.header 
  position relative
  z-index 10

</style>

