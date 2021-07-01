<template>
  <MainLayout>
    <main class="relative z-10 flex flex-col items-center">
      <header class="w-full h-[85vh] p-4 flex flex-col justify-center items-center gap-3">
        <h1 class="font-black text-6xl text-center text-blue-gray-900">
          Anhzf.Dev
        </h1>
        <span class="bg-light-blue-400/50 font-medium text-xl text-center text-white">
          JAMStack Web Developer
        </span>
      </header>

      <div class="font-medium text-blue-gray-400 flex flex-col items-center gap-1 animate-bounce animate-duration-2000">
        <span>featured projects</span>
        <eva-icon
          name="arrow-downward"
          width="1.3rem"
          height="1.3rem"
        />
      </div>

      <section class="h-[200vh] p-8 flex flex-col items-center gap-8">
        <CardProject
          title="Bersamabisa.ID Community"
          img-src="/assets/img/projects/bbid.png"
          :tech-stack="[
            '/assets/icons/quasar.svg',
            '/assets/icons/firebase.svg',
            '/assets/icons/vue.svg',
          ]"
        />

        <CardProject
          title="KPBI Membership Management"
          img-src="/assets/img/projects/kpbi.png"
          :tech-stack="[
            '/assets/icons/vue.svg',
            '/assets/icons/laravel.svg',
          ]"
        />

        <CardProject
          title="Sebelas Maret International IoT Challenges 2021"
          img-src="/assets/img/projects/iotchallenges.png"
          :tech-stack="[
            '/assets/icons/react.svg',
          ]"
        />

        <CardProject
          title="Komplain Apps"
          img-src="/assets/img/projects/sipm.png"
          :tech-stack="[
            '/assets/icons/quasar.svg',
            '/assets/icons/firebase.svg',
            '/assets/icons/vue.svg',
          ]"
        />

        <button class="font-medium text-blue-gray-400 flex items-center gap-1">
          <span>More</span>
          <eva-icon
            name="arrow-forward-outline"
            class="block"
          />
        </button>
      </section>
    </main>

    <div class="absolute top-0 left-0 w-full h-screen">
      <div class="relative w-full h-full transform -translate-y-10">
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-yellow-300/30 rounded-full filter blur-xl transform -translate-x-1/2 -translate-y-[80%]" />
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-300/30 rounded-full filter blur-xl transform -translate-x-[80%] -translate-y-[20%]" />
        <div class="absolute top-1/2 left-1/2 w-64 h-64 bg-green-300/30 rounded-full filter blur-xl transform -translate-x-[20%] -translate-y-[20%]" />
      </div>
    </div>
  </MainLayout>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardProject from 'components/CardProject.vue';
import MainLayout from 'src/layouts/MainLayout.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { MainLayout, CardProject },
});
</script>
