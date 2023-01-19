<template>
  <section class="terms">
    <div class="container-mid">
      <div class="terms__inner">
        <h2 class="title_up-middle mb-24">ПОЛИТИКА КОНФИДЕНЦИАЛЬНОСТИ</h2>

        <Accordion class="accordion_white" :data="politics" isHtml />
      </div>
    </div>
  </section>
</template>

<script setup>
import Accordion from "@/layout/Accordion.vue";
import { usePoliticsStore } from "@/stores/terms/politicsStore";

const politics = usePoliticsStore().politics;
</script>
