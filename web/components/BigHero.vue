<script lang="ts" setup>
const whatBuild = Object.freeze(['Web App', 'Mobile App']);
const whatBuildActiveIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    whatBuildActiveIndex.value = (whatBuildActiveIndex.value + 1) < whatBuild.length
      ? whatBuildActiveIndex.value + 1 : 0;
  }, 5000);
});
</script>

<template>
  <header class="w-full h-[85vh] p-4 flex flex-col justify-center items-center gap-3">
    <h1 class="font-black text-6xl text-center text-slate-900">
      <NuxtLink :to="{ name: 'index' }">
        anhzf.dev
      </NuxtLink>
    </h1>
    <div
      class="flex items-center flex-no-wrap bg-light-blue-400/50 font-medium text-xl text-center text-white overflow-hidden">
      <span class="shrink-0 pl-2">Transform your idea into a</span>
      <TransitionGroup tag="ul" enter-from-class="transition duration-700 transform opacity-30 translate-y-6"
        enter-to-class="transition duration-700 transform opacity-100 translate-y-0"
        leave-from-class="transition duration-700 transform opacity-100 translate-y-0"
        leave-to-class="transition duration-700 transform opacity-30 -translate-y-6"
        class="relative w-10ch h-full inline-block overflow-hidden mx-1">
        <li v-for="(el, i) in whatBuild" v-show="whatBuildActiveIndex === i" :key="el"
          class="absolute inset-0 font-bold inline">
          {{ el }}
        </li>
      </TransitionGroup>
    </div>
  </header>
</template>
