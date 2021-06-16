<template>
  <main class="flex flex-col items-center">
    <header class="w-full h-screen p-4 flex flex-col sm:items-center">
      <h1
        ref="title"
        class="w-min mt-[15vh] sm:mt-0 px-4 font-bold text-5xl sm:text-9xl text-blue-gray-900 transform"
        :style="styleByScrollY((y) => ({
          '--tw-translate-y': `${y * 1.4}px`,
          willChange: 'transform',
        }), toPx('100vh'))"
      >
        Anhzf.Dev
      </h1>

      <div class="absolute right-0 overflow-none">
        <img
          src="assets/img/anhzf_transparent.png"
          alt="anhzf"
          class="w-xs sm:w-max max-w-sm transform translate-x-1/2"
          :style="styleByScrollY((y) => ({
            '--tw-translate-y': `${y * -1.2}px`,
            willChange: 'transform',
          }))"
        >
      </div>

      <button
        class="justify-self-end mt-auto animate-bounce p-2 flex flex-col items-center gap-y-2"
        :style="styleByScrollY((y) => ({ opacity: 1 - y * 0.005 }), 200)"
      >
        <span class="font-medium text-2xl text-blue-500">Featured projects</span>
        <span class="material-icons-round text-4xl text-purple-500">
          arrow_downward
        </span>
      </button>
    </header>
    <!-- <section class="relative w-full max-w-screen-lg px-4 py-10 before:(content absolute -z-1 top-0 left-0 w-full h-full bg-blue-gray-100 rounded-xl) after:(content absolute -z-1 top-0 left-0 w-full h-full bg-gradient-2 rounded-xl shadow-lg transform -rotate-rotate-2)">
      <h5>Hi, I'm Alwan!</h5>
    </section> -->

    <div class="h-[200vh]" />
  </main>
</template>

<script lang="ts">
import {
  computed,
  CSSProperties,
  defineComponent, ref,
} from 'vue';
import toPx from 'unit-to-px';
import { useWindowScroll } from '@vueuse/core';

// eslint-disable-next-line no-unused-vars
type styleByScrollFactory = (y: number) => CSSProperties;

export default defineComponent({
  name: 'PageIndex',
  setup() {
    const title = ref(null);
    const { y } = useWindowScroll();
    const styleByScrollY = computed(
      () => (factory: styleByScrollFactory, offset: number | null = null) => {
        console.log(y.value, offset);

        if (typeof offset === 'number') {
          // if scroll Y reaches the offset it will be stopped
          return factory(y.value >= offset
            ? offset : y.value);
        }
        return factory(y.value);
      },
    );

    return {
      title,
      styleByScrollY,
      toPx,
    };
  },
});
</script>
