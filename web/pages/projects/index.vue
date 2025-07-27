<script lang="ts" setup>
import { parse } from 'valibot';
import { ProjectSchema } from '~/schemas/project';

const segments = '/projects'.split('/')
  .map((segment, _, segments) => ({
    title: segment,
    path: segments.slice(0, segments.indexOf(segment) + 1).join('/'),
  }));

const { data: projects } = await useAsyncData('projects', async () => {
  const result = await queryContent('/projects')
    .only(['title', 'description', 'thumbnail', 'technologies', 'liveUrl', 'demoUrl', 'repositoryUrl', '_path'])
    .find();
  return result.map(el => parse(ProjectSchema, {
    ...el,
    path: el._path,
  }));
}, { default: () => [] });
</script>

<template>
  <div class="px-8 lg:px-16 py-8">
    <div data-scroll-section>
      <h1 class="text-2xl lg:text-4xl text-blue-300 font-semibold whitespace-pre-line tracking-tighter">
        <code>ls 
          <div class="inline-flex gap-1">
            <NuxtLink
              v-for="segment in segments"
              :key="segment.path"
              :to="segment.path || '/'"
              class=""
              >
              <span class="underline decoration-dotted hover:decoration-solid px-2 hover:bg-blue-300/25">{{ segment.title }}/</span>
            </NuxtLink>
          </div>
        </code>
      </h1>
    </div>

    <div class="h-16vh" />

    <section
      data-scroll-section
      class=""
    >
      <div class="grid grid-cols-1 gap-x-12">
        <article
          v-for="(project, i) in projects"
          :key="project.path"
          data-scroll
          data-scroll-repeat
          data-scroll-speed="2"
          data-scroll-offset="20%"
          :data-scroll-delay="0.025 + Number((projects.length * 0.03 - 0.03 * i).toFixed(2))"
          class="group relative opacity-0 [&.is-inview]:opacity-100 transition-all duration-300 flex flex-col rounded-lg hover:rounded-3xl bg-transparent hover:bg-blue-500/10 px-8 py-6 border border-4 border-transparent hover:border-purple-500"
        >
          <h2
            class="text-4xl lg:text-5xl text-blue-500/95 font-bold whitespace-pre-line tracking-tight flex gap-x-4 group-hove:underline group-hover:underline-4 max-w-screen-2xl"
          >
            <span>{{ project.title }}</span>

            <div
              class="i-eva:diagonal-arrow-right-up-fill self-start cursor-pointer size-1.5em text-blue-200 group-hover:text-white -translate-y-.25em group-hover:-translate-y-.5em group-hover:translate-x-.25em transition-transform"
            />
          </h2>

          <p
            class="text-base lg:text-lg font-serif font-normal text-slate-500 group-hover:text-purple-500/90 text-balance max-w-screen-2xl transition-colors">
            {{ project.description || 'No description provided' }}
          </p>


          <NuxtLink
            :to="project.path"
            target="_blank"
            class="absolute inset-0 z-10"
          >
            <span class="sr-only">
              {{ project.title }}
            </span>
          </NuxtLink>
        </article>
      </div>

      <div class="h-16vh" />

      <a
        title="See more on GitHub"
        href="https://github.com/anhzf"
        target="_blank"
        class="group font-medium text-blue-gray-400 flex items-center gap-1"
        data-scroll
        data-scroll-repeat
        data-scroll-speed="2"
        data-scroll-offset="20%"
        :data-scroll-delay="0.025 + Number(((projects.length + 1) * 0.03 - 0.03).toFixed(2))"
      >
        <span>See More</span>
        <div class="i-eva:arrow-forward-outline block transform group-hover:translate-x-1.5 transition-transform" />
      </a>
    </section>
  </div>
</template>