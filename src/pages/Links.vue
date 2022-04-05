<template>
  <BigHero />

  <main
    id="main"
    class="pb-20 flex flex-col justify-center items-center"
  >
    <section class="max-w-screen-sm px-4 sm:px-6 py-10 bg-white flex flex-col justify-center items-stretch gap-y-10 shadow-md">
      <div class="w-full px-4 pb-6 border-b border-indigo-100">
        <h2 class="font-bold bg-clip-text text-transparent bg-gradient-to-br from-indigo-500 to-light-blue-500 uppercase">
          LINKS
        </h2>
      </div>

      <CardLink
        v-for="link in links"
        :key="link.label"
        v-bind="link"
      />
    </section>
  </main>
</template>

<script lang="ts" setup>
import { useHead } from '@vueuse/head';
import { links } from '@/content-data';
import CardLink from 'components/CardLink.vue';
import BigHero from 'components/BigHero.vue';

useHead({
  title: 'Links - Anhzf.Dev',
});
</script>
