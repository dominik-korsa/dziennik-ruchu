<template>
  <div class="either">
    <div :class="{
      'cross-out': choice === 'second'
    }">
      {{ first }}
    </div>
    <div class="second" :class="{
      'cross-out': choice === 'first'
    }">
      {{ second }}
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  first: string;
  second: string;
  choice: 'first' | 'second' | 'none';
}>(), {
  choice: 'none',
});
</script>

<style lang="scss">
.either {
  display: inline-block;
  vertical-align: middle;

  .second {
    border-top: 1.3pt solid;
  }
}
</style>
