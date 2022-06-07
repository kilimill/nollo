<template lang="pug">
main.main(:class="checkRoute")
  //- img.bg_gradient(src="@/assets/img/bg.jpg", v-if="gradient")
  //- img.bg_gradient(src="@/assets/img/bg.jpg", v-if="gradient")
  .gradient(v-if="checkRoute == 'gradient'")
    .gradient-1
    .gradient-2
    .gradient-3
  .main__content
    Header
    transition(name="fade", mode="out-in")
      router-view
  Footer(v-if='checkRoute !== "log-in"')
</template>
<script setup>
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import findClass from "@/helpers/findClass.js";

const { checkRoute } = findClass()
</script>

<style scoped lang='stylus'>
.main {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;

  &__content {
    position: relative;
    z-index: 11;
    flex: 1 0 auto;
  }

  &.light {
    background-color: #FFFFFF;
  }

  .footer {
    flex: 0 0 auto;
  }
}

.bg_gradient {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height 1000px
  background-size: cover;
  background-position: center;
  background-position: center;
}

.gradient {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 1000px;

  &-1 {
    position absolute
    width 689px
    height 689px
    top -40%
    left 50%
    transform translateX(-50%)
    background: #A4FFA6;
    filter: blur(275px);
  }

  &-2 {
    position absolute
    width 627px
    height 627px
    top 132px
    left 0
    transform translateX(-30%)
    background: #D8FF8A;
    filter: blur(275px);
  }

  &-3 {
    position absolute
    width 847px
    height 847px
    top 145px
    left auto
    right -5%
    transform translateX(-50%)
    background: #8AFFAC;
    opacity: 0.48;
    filter: blur(275px);
  }
}


</style>
