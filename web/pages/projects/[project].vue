<script lang="ts" setup>
import { parse } from 'valibot';
import { START_LOCATION } from 'vue-router';
import { TECHNOLOGIES } from '~/lib/projects';
import { ProjectSchema } from '~/schemas/project';

const route = useRoute();
const { data: doc } = await useAsyncData('project', () => queryContent(route.path).findOne());
if (!doc.value) throw createError({ statusCode: 404 });

const project = parse(ProjectSchema, { ...doc.value, path: doc.value._path });

useContentHead(doc.value);

onMounted(() => {
  if (START_LOCATION.name !== route.name) {

  }
})
</script>

<template>
  <article data-scroll-section class="max-w-prose text-2xl mx-auto flex flex-col gap-8 px-2 py-8">
    <h1 class="text-3xl lg:text-5xl font-semibold whitespace-pre-line tracking-tight">
      {{ project.title }}
    </h1>

    <p class="text-lg font-serif font-normal text-slate max-w-prose text-balance">
      {{ project.description || 'No description provided' }}
    </p>

    <div class="self-center w-screen max-w-screen relative flex flex-col">
      <!-- <div class="absolute h-2/3 bg-blue-400/25 inset-x-0 inset-y-1/2 -translate-y-1/2 backdrop-blur-lg" /> -->
      <img :src="doc!.image ?? project.thumbnail" :alt="project.title" :width="800"
        class="w-screen max-w-screen-xl self-center mx-4 z-1 aspect-video bg-slate-300/20 backdrop-blur-lg object-cover rounded-lg shadow-xl shadow-blue/30" />
    </div>

    <div class="flex gap-3 flex-wrap my-4">
      <a v-for="tech in project.technologies" :key="tech" :href="`/projects?tag=${tech}`"
        class="text-base bg-blue-300/20 hover:bg-blue-500/20 backdrop-blur-lg text-blue-950 px-3 py-2 rounded-full border border-blue-300 flex gap-2">
        <img :src="TECHNOLOGIES[tech]?.icon ?? tech" :alt="tech" :title="TECHNOLOGIES[tech]?.title ?? tech" :width="24"
          class="w-6 h-6 p-[0.04rem] object-scale-down" />
        {{ TECHNOLOGIES[tech]?.title ?? tech }}
      </a>
    </div>

    <div class="prose text-base lg:text-lg min-h-50vh">
      <ContentRenderer :value="doc!">
        <template #empty>
          <i>No details content provided.</i>
        </template>
      </ContentRenderer>
    </div>
  </article>
</template>