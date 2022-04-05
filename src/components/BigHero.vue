<template>
  <header class="w-full h-[85vh] p-4 flex flex-col justify-center items-center gap-3">
    <h1 class="font-black text-6xl text-center text-blue-gray-900">
      <router-link to="/">
        Anhzf.Dev
      </router-link>
    </h1>
    <div class="flex bg-light-blue-400/50 font-medium text-xl text-center text-white items-center">
      <span>Your dream </span>
      <transition-group
        tag="ul"
        enter-from-class="transition duration-700 transform opacity-30 translate-y-4"
        enter-to-class="transition duration-700 transform opacity-100 translate-y-0"
        leave-from-class="transition duration-700 transform opacity-100 translate-y-0"
        leave-to-class="transition duration-700 transform opacity-30 translate-y-4"
        class="relative w-32 h-full inline-block overflow-hidden"
      >
        <li
          v-for="(el, i) in whatBuild"
          v-show="whatBuildActiveIndex === i"
          :key="el"
          class="absolute inset-0 font-bold inline"
        >
          {{ el }}
        </li>
      </transition-group>
      <span> with Javascript</span>
    </div>
  </header>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const whatBuild = ['Web App', 'Mobile App'];
const whatBuildActiveIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    whatBuildActiveIndex.value = (whatBuildActiveIndex.value + 1) < whatBuild.length
      ? whatBuildActiveIndex.value + 1 : 0;
  }, 5000);
});
</script>
