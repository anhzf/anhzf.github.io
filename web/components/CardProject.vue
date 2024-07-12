<script lang="ts" setup>
import { TECHNOLOGIES, type TECHNOLOGY_NAMES } from '~/lib/projects';

interface Props {
  title: string;
  path: string;
  thumbnail: string;
  liveUrl?: string | null;
  demoUrl?: string | null;
  technologies?: typeof TECHNOLOGY_NAMES;
}

withDefaults(defineProps<Props>(), {
  thumbnail: 'https://placehold.co/300',
  technologies: () => [],
});
</script>

<template>
  <article class="m-2 w-full max-w-xs bg-white rounded-2xl shadow shadow-blue-300 transition-shadow hover:(shadow-xl)">
    <div class="overflow-hidden h-44 rounded-t-[inherit]">
      <NuxtImg :src="thumbnail" :alt="title" :width="350" loading="lazy" format="webp"
        sizes="100vw sm:50vw lg:35vw 2xl:25vw" class="object-cover w-full h-full" />
    </div>
    <div class="px-5 py-4">
      <h3 class="font-bold text-indigo-400 line-clamp-1" :title="title">
        <NuxtLink :to="path" class="hover:underline">
          {{ title }}
        </NuxtLink>
      </h3>

      <div class="pt-1 flex justify-between">
        <div class="flex gap-2.5">
          <a v-if="liveUrl" :href="liveUrl" target="_blank"
            class="flex items-center flex-nowrap gap-x-1.5 text-slate-300 font-medium transition-colors hover:text-blue-500">
            <span>Live</span>
            <div height="1rem" class="i-eva:external-link-outline block" />
          </a>

          <a v-if="demoUrl" :href="demoUrl" target="_blank"
            class="flex items-center flex-nowrap gap-x-1.5 text-slate-300 font-medium transition-colors hover:text-blue-500">
            <span>Demo</span>
            <div height="1rem" class="i-eva:external-link-outline block" />
          </a>
        </div>

        <div v-if="technologies.length"
          class="px-1 py-0.5 border-[0.2px] border-slate-100 rounded-full flex items-center gap-1">
          <img v-for="(stack, i) in technologies" :key="i" :src="TECHNOLOGIES[stack].icon ?? stack" :alt="stack"
            :title="TECHNOLOGIES[stack].title ?? stack" :width="16" class="w-3.5 h-3.5 p-[0.04rem] object-scale-down" />
        </div>
      </div>
    </div>
  </article>
</template>
