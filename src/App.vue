<template>
  <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <HelloWorld :msg="msg" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from './components/HelloWorld.vue';

interface IData {
  msg: string;
}

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
  },
  data(): IData {
    return {
      msg: 'Hello Vue 3 + TypeScript + Vite',
    };
  },
});
</script>

<style lang="sass">
#app
  @apply text-center
</style>
