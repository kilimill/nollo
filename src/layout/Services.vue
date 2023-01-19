<template>
  <div class="tags">
    <ul class="tags__service">
      <li class="tags__service-item opacity-70" v-for="(service, i) in tags" :key="i">
        <span class="icon icon--def" v-html="service.icon"></span>
        <span class="controls_small ml-8">{{ service.name }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  tags: Array,
});
</script>
