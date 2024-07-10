<script lang="ts" setup>
const isMobile = import.meta.env.SSR
  ? false
  : /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
</script>

<template>
  <div class="min-h-100vh flex flex-col">
    <nav>
      <MegaMenu />
    </nav>

    <div class="grow">
      <slot />
    </div>

    <ClientOnly>
      <Blob />
    </ClientOnly>

    <footer data-scroll-section
      class="p-8 bg-purple-400 flex flex-col-reverse md:flex-row justify-between items-center">
      <NuxtLink :to="{ name: 'index' }" class="hover:underline text-purple-50 flex items-center">
        anhzf.dev
      </NuxtLink>

      <span class="text-blue-50 text-center">
        Copyright © 2022 All rights reserved
      </span>

      <div class="text-sm" />
    </footer>

    <CursorFollower v-if="!isMobile" />
  </div>
</template>

<style lang="scss">
@import '@/assets/portofolio.scss';
</style>