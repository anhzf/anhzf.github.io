<template>
  <main
    id="main"
    class="relative flex flex-col items-center"
  >
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

    <section
      id="projects"
      class="h-[200vh] p-8 flex flex-col items-center gap-8"
    >
      <CardProject
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />

      <button class="group font-medium text-blue-gray-400 flex items-center gap-1">
        <span>More</span>
        <eva-icon
          name="arrow-forward-outline"
          class="block transform group-hover:translate-x-1.5 transition-transform"
        />
      </button>
    </section>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { projects } from '@/content-data';
import CardProject from 'components/CardProject.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { CardProject },
  setup() {
    return {
      projects,
    };
  },
});
</script>
