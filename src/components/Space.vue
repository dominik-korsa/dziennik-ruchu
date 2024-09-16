<template>
  <div
    class="space filled-in"
    :class="{
      grow: !width,
      first,
      last,
    }"
    :style="style"
  >
    <slot>{{ value }}</slot>
    <span class="zwsp">&ZeroWidthSpace;</span>
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps<{
  width?: string;
  first?: boolean;
  last?: boolean;
  value?: string;
}>();

const style = computed(() => {
  if (!props.width) return {};
  return {
    width: props.width,
  };
});
</script>

<style lang="scss">
.space {
  display: inline-block;
  border-bottom: 1.3pt dotted #0005;
  box-sizing: border-box;
  padding-left: 0.5em;
  padding-right: 0.5em;
  text-align: center;
  min-width: fit-content;

  &:not(.first) {
    margin-left: 0.4em;
  }

  &:not(.last) {
    margin-right: 0.4em;
  }

  .zwsp {
    user-select: none;
  }
}
</style>
