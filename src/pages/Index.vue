<template>
  <main
    id="main"
    class="relative flex flex-col items-center"
  >
    <BigHero />

    <div
      class="font-medium text-blue-gray-400 flex flex-col items-center gap-1 animate-bounce animate-duration-2000"
    >
      <span>featured projects</span>
      <eva-icon
        name="arrow-downward"
        class="w-5 h-5"
      />
    </div>

    <section
      id="projects"
      class="p-8 flex flex-col items-center gap-8"
    >
      <CardProject
        v-for="project in projects"
        :key="project.title"
        v-bind="project"
      />

      <a
        title="view more on GitHub"
        href="https://github.com/anhzf"
        target="_blank"
        class="group font-medium text-blue-gray-400 flex items-center gap-1"
      >
        <span>More</span>
        <eva-icon
          name="arrow-forward-outline"
          class="block transform group-hover:translate-x-1.5 transition-transform"
        />
      </a>
    </section>
  </main>
</template>

<script lang="ts" setup>
import { projects } from '@/content-data';
import CardProject from 'components/CardProject.vue';
import BigHero from 'components/BigHero.vue';
</script>
