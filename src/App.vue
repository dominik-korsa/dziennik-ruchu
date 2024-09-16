<template>
  <route-document v-for="(config, i) in configs" :config="config" :key="i" />
</template>

<script lang="ts" setup>
import RouteDocument from "./components/RouteDocument.vue";
import {configs} from "./config.ts";
</script>
