<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>

<style lang="sass">
body
  @apply overflow-x-hidden bg-blue-50
</style>
