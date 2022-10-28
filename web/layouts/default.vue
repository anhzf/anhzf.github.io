<template>
  <div class="min-h-100vh flex flex-col">
    <nav>
      <mega-menu />
    </nav>

    <div class="grow">
      <slot />
    </div>

    <client-only>
      <blob />
    </client-only>

    <footer class="p-8 bg-purple-400 flex flex-col-reverse md:flex-row justify-between items-center">
      <nuxt-link :to="{ name: 'index' }" class="hover:underline text-purple-50 flex items-center">
        anhzf.dev
      </nuxt-link>

      <span class="text-blue-50 text-center">Copyright © 2022 All rights reserved</span>

      <div class="text-sm"></div>
    </footer>


    <cursor-follower v-if="!isMobile" />
  </div>
</template>

<script lang="ts" setup>


const isMobile = import.meta.env.SSR
  ? false
  : /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
</script>