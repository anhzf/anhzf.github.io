<script lang="ts" setup>
// import { TECHNOLOGIES } from '~/lib/projects';

// const randoms = ref<Record<string, Record<string, number>>>(
//   Object.fromEntries(
//     Object.keys(TECHNOLOGIES).map((name) => {
//       return [name, { y: 0, x: 0 }];
//     }),
//   ),
// );
// onMounted(async () => {
//   const { default: anime } = await import('animejs');
//   Object.keys(TECHNOLOGIES).forEach((name, i, names) => {
//     const xRange = (Math.min(window.screen.width, 1536) / 2) - 40 /* padding */;
//     const values = {
//       x: i > (names.length / 2) ? anime.random(0, xRange) : -anime.random(0, xRange),
//       y: -anime.random(0, 240),
//     }
//     randoms.value[name] = values;
//   });
// });
</script>

<template>
  <header data-scroll-section class="w-full h-[85vh] relative flex flex-col justify-center items-center gap-3 p-4">
    <div class="flex flex-col items-center gap-2">
      <h1 data-scroll data-scroll-speed="2" data-scroll-delay="0.01"
        class="font-black text-6xl text-center text-slate-900">
        <NuxtLink :to="{ name: 'index' }">
          anhzf.dev
        </NuxtLink>
      </h1>
      <div data-scroll data-scroll-speed="3" data-scroll-delay="0.25"
        class="font-medium text-xl text-center text-white max-w-36ch text-balance">
        <span class="bg-light-blue-400/50 px-2 py-1 leading-normal box-decoration-clone">
          Develop your ideas into a business-valuable app
        </span>
      </div>
    </div>

    <!-- <div class="absolute inset-x-0 bottom-8 px-8 flex flex-col">
      <div class="sr-only">Stack:</div>
      <ul class="self-center w-full max-w-screen-2xl flex justify-center">
        <li v-for="(tech, name) in TECHNOLOGIES" :key="name" data-scroll data-scroll-repeat
          :data-scroll-speed="5 + Number((Math.random() * 10).toFixed(2))"
          class="shrink-0 size-10 lg:size-12 block opacity-0 [&.is-inview]:opacity-50 transition-opacity transition-duration-700">
          <img :src="tech.icon" :alt="tech.title" width="40" height="40"
            class="filter-grayscale w-full absolute transform transition-transform transition-duration-1000"
            :style="{ transform: `translate(${randoms[name].x}px, ${randoms[name].y}px)` }">
        </li>
      </ul>
    </div> -->
  </header>
</template>
