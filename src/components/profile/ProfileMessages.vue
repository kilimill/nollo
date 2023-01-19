<template>
  <section class="profile-component">
    <div class="profile-component__inner" v-if="!isBusy">
      <MessageList />
      <!-- <NotFound v-else page-info="booking" /> -->
    </div>
    <Loader v-else />
  </section>
</template>

<script setup>
// import NotFound from "@/components/NotFound.vue";
import MessageList from "@/layout/MessageList.vue";
</script>
