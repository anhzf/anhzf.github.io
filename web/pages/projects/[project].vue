<script lang="ts" setup>
import { parse } from 'valibot';
import { TECHNOLOGIES } from '~/lib/projects';
import { ProjectSchema } from '~/schemas/project';

const route = useRoute();

const { data: doc } = await useAsyncData(`project:${route.path}`, () => queryContent(route.path).findOne());
if (!doc.value) throw createError({ statusCode: 404 });

const project = parse(ProjectSchema, { ...doc.value, path: doc.value._path });

const linkItems: Record<string, {
  url?: string | null;
  icon?: string | null;
  [key: string]: any;
}> = (({
  'View Live': {
    url: project.liveUrl,
    title: 'Live is the real production site/deployment.'
  },
  'View Demo': {
    url: project.demoUrl,
    title: 'Demo is the preview only site/deployment.'
  },
  'Repository': {
    url: project.repositoryUrl,
    icon: 'i-eva:github-outline',
    title: 'Repository is the source code of the project.'
  },
}));

const onContentBeforeUnmount = (vnode: VNode) => {
  // Cleanup iframes
  vnode.el?.querySelectorAll('iframe').forEach((elm: HTMLIFrameElement) => {
    elm.src = 'about:blank';
  });
}

useContentHead(doc.value);
</script>

<template>
  <main id="main" data-scroll-section class="max-w-prose text-2xl mx-auto flex flex-col gap-8 px-2 py-12">
    <div class="flex flex-col lg:flex-row justify-between items-center gap-4">
      <div class="grow flex flex-col gap-8">
        <h1 class="text-4xl lg:text-5xl text-slate-900 font-semibold whitespace-pre-line tracking-tight">
          {{ project.title }}
        </h1>

        <p class="text-base lg:text-lg font-serif font-normal text-slate-500 max-w-prose text-balance">
          {{ project.description || 'No description provided' }}
        </p>
      </div>

      <div
        class="shrink-0 self-stretch lg:self-auto relative flex lg:flex-col lg:divide-y divide-blue-300 lg:border-l-2 border-l-blue-300
        lg:before:content-[quoted:_] before:absolute before:bottom-full before:right-full before:h-10 before:w-2px before:bg-gradient-to-t before:from-blue-300
        lg:after:content-[quoted:_] after:absolute after:top-full after:right-full after:h-10 after:w-2px after:bg-gradient-to-b after:from-blue-300
        *:relative lg:before:*:content-[quoted:_] before:last:*:content-none before:*:absolute before:*:left-full before:*:top-full before:*:w-10 before:*:h-1px before:*:bg-gradient-to-r before:*:from-blue-300">
        <template v-for="({ url, icon, ...attrs }, label) in linkItems" :key="label">
          <a v-if="url" :href="url" target="_blank" rel="noopener noreferrer"
            class="grow text-base flex justify-center items-center gap-3 px-8 py-5 hover:bg-blue-300/20 active:bg-blue-500/20 text-blue-800/90 text-center font-semibold backdrop-blur-lg"
            v-bind="attrs">
            <div class="w-6 h-6 text-blue-700/60" :class="[icon ?? 'i-eva:external-link-outline',]" />
            <span>{{ label }}</span>
          </a>
        </template>
      </div>
    </div>

    <div data-scroll data-scroll-speed="1" data-scroll-delay="0.1"
      class="self-center w-screen max-w-screen relative flex flex-col">
      <img :src="doc!.image ?? project.thumbnail" :alt="project.title" :width="800"
        class="w-screen max-w-screen-xl self-center mx-4 z-1 aspect-video bg-slate-300/20 backdrop-blur-lg object-cover rounded-lg shadow-xl shadow-blue/30" />
    </div>

    <div class="flex gap-3 flex-wrap lg:my-4">
      <a v-for="(tech, i) in project.technologies" :key="tech" :href="`/projects?tag=${tech}`" data-scroll
        data-scroll-speed="1" :data-scroll-delay="0.1 + i * 0.05"
        class="text-sm lg:text-base bg-blue-300/20 hover:bg-blue-500/20 backdrop-blur-lg text-blue-950 px-2.5 lg:px-3 py-1 lg:py-2 rounded-full border border-blue-300 flex gap-2">
        <img :src="TECHNOLOGIES[tech]?.icon ?? tech" :alt="tech" :title="TECHNOLOGIES[tech]?.title ?? tech" :width="24"
          class="w-5 lg:w-6 h-5 lg:h-6 p-[0.04em] object-scale-down" />
        {{ TECHNOLOGIES[tech]?.title ?? tech }}
      </a>
    </div>

    <ContentRenderer :value="doc!" class="prose text-base lg:text-lg min-h-50vh flex flex-col"
      @vue:beforeUnmount="onContentBeforeUnmount">
      <template #empty>
        <i>No details content provided.</i>
      </template>
    </ContentRenderer>
  </main>
</template>