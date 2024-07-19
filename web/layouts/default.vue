<script lang="ts" setup>
const isMobile = import.meta.env.SSR
  ? false
  : /Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
</script>

<template>
  <div class="min-h-100vh flex flex-col">
    <NuxtLoadingIndicator />

    <nav>
      <MegaMenu />
    </nav>

    <div class="grow min-h-screen pb-20vh">
      <slot />
    </div>

    <ClientOnly>
      <Blob />
    </ClientOnly>

    <footer data-scroll-section>
      <div data-scroll data-scroll-speed="0.1" data-scroll-delay="0.05"
        class="p-8 bg-purple-400 flex flex-col-reverse md:flex-row justify-between items-center">
        <NuxtLink :to="{ name: 'index' }" class="hover:underline text-purple-50 flex items-center">
          anhzf.dev
        </NuxtLink>

        <span class="text-blue-50 text-center">
          Copyright © 2024 All rights reserved
        </span>

        <NuxtLink :to="{ name: 'about' }" class="text-sm hover:underline">
          About me
        </NuxtLink>
      </div>
    </footer>

    <CursorFollower v-if="!isMobile" />
  </div>
</template>

<style lang="scss">
@import '@/assets/portofolio.scss';
</style>