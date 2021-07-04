<template>
  <MainLayout>
    <header class="sticky top-0 -z-1 w-full h-[85vh] p-4 flex flex-col justify-center items-center gap-3">
      <h1 class="font-black text-6xl text-center text-blue-gray-900">
        Anhzf.Dev
      </h1>
      <span class="bg-light-blue-400/50 font-medium text-xl text-center text-white">
        JAMStack Web Developer
      </span>
    </header>

    <main class="pb-20 flex flex-col justify-center items-center">
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
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useHead } from '@vueuse/head';
import { links } from '@/content-data';
import MainLayout from 'src/layouts/MainLayout.vue';
import CardLink from 'components/CardLink.vue';

export default defineComponent({
  name: 'PageLinks',
  components: { MainLayout, CardLink },
  setup() {
    useHead({
      title: 'Links - Anhzf.Dev',
    });

    return {
      links,
    };
  },
});
</script>
