<script setup lang="ts">
import { parse } from 'valibot';
import { ProjectSchema } from '~/schemas/project';

const { data: projects } = await useAsyncData('projects-pinned', async () => {
  const result = await queryContent('/projects')
    /* TODO: Implement only pinned projects */
    // .where({ pinned: true })
    .only(['title', 'desc', 'cover', 'thumbnail', 'technologies', 'liveUrl', 'demoUrl', 'repositoryUrl', '_path'])
    .find();
  return result.map(el => parse(ProjectSchema, {
    ...el,
    path: el._path,
  }));
}, { default: () => [] });

useHead({
  title: 'A Developer Personal Site',
});
</script>

<template>
  <main id="main" class="flex flex-col items-center">
    <BigHero />

    <div data-scroll-section class="flex flex-col">
      <div data-scroll data-scroll-speed="1"
        class="font-medium text-blue-gray-400 flex flex-col items-center gap-1 animate-bounce animate-duration-2000">
        <span>featured projects</span>
        <div class="i-eva:arrow-downward-outline w-5 h-5" />
      </div>

      <section id="projects" class="p-8 flex flex-col items-center gap-8">
        <h2 class="hidden">Pinned Projects</h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-4">
          <CardProject v-for="(project, i) in projects" :key="project?.title" data-scroll data-scroll-repeat
            data-scroll-speed="3" data-scroll-offset="20%"
            :data-scroll-delay="0.1 + Number((projects.length * 0.03 - 0.03 * i).toFixed(2))"
            class="opacity-0 [&.is-inview]:opacity-100 transition-shadow,opacity" :data="project" />
        </div>

        <a title="See more on GitHub" href="https://github.com/anhzf" target="_blank"
          class="group font-medium text-blue-gray-400 flex items-center gap-1">
          <span>See More</span>
          <div class="i-eva:arrow-forward-outline block transform group-hover:translate-x-1.5 transition-transform" />
        </a>
      </section>
    </div>
  </main>
</template>