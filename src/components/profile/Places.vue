<template lang="pug">
section.places
  NotFound(pageInfo="places")
  Catalog
</template>

<script setup>
// import Catalog from '@/components/Catalog.vue'
import NotFound from '@/components/NotFound.vue'
import Catalog from '@/components/Catalog.vue'
</script>