<template>
  <div class="double-page">
    <div class="single-page" />
    <title-page :numbered-page-count="pageCount" :config="config" />
  </div>
  <div class="double-page" v-for="([first, second], i) in doublePages" :key="i">
    <route-page
        :page-number="first"
        :route="config.leftRoute"
    />
    <route-page
        :page-number="second"
        page-number-right
        :route="config.rightRoute ?? config.leftRoute"
    />
  </div>
</template>

<script setup lang="ts">
import RoutePage from "./RoutePage.vue";
import TitlePage from "./TitlePage.vue";
import {Config} from "../common.ts";
import {computed} from "vue";

const props = defineProps<{
  config: Config;
}>();

const pageCount = computed(
    () => props.config.minPageCount + 3 - (props.config.minPageCount + 1) % 4,
);

const doublePages = computed(() => {
  const result: [[number, number]] = [];
  for (let i = 0; i < pageCount.value / 2; i++) {
    if (i % 2 == 0) result.push([i+1, pageCount.value-i]);
    else result.push([pageCount.value-i, i+1]);
  }
  return result;
});
</script>
