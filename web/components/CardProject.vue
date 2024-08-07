<script lang="ts" setup>
import type { InferOutput } from 'valibot';
import { TECHNOLOGIES } from '~/lib/projects';
import type { ProjectSchema } from '~/schemas/project';

interface Props {
  data: InferOutput<typeof ProjectSchema>;
};

defineProps<Props>();
</script>

<template>
  <article
    class="group flex flex-col w-full max-w-xs bg-white rounded-2xl shadow shadow-blue-300 transition-shadow hover:shadow-xl active:shadow-sm overflow-hidden">
    <NuxtLink :to="data.path" class="h-44">
      <NuxtImg
        :src="data.thumbnail ?? data.cover ?? data.image ?? `https://placehold.co/350x200?text=${encodeURIComponent(data.title)}`"
        :alt="data.title" :width="350" loading="lazy" format="webp" sizes="100vw sm:50vw lg:35vw 2xl:25vw"
        class="object-cover w-full h-full" />
    </NuxtLink>
    <div class="px-5 py-4">
      <h3 class="font-bold text-indigo-400 line-clamp-1" :title="data.title">
        <NuxtLink :to="data.path" class="group-hover:underline">
          {{ data.title }}
        </NuxtLink>
      </h3>

      <div class="pt-1 flex justify-between">
        <div class="flex gap-2.5">
          <a v-if="data.liveUrl" :href="data.liveUrl" target="_blank"
            class="flex items-center flex-nowrap gap-x-1.5 text-slate-300 font-medium transition-colors hover:text-blue-500">
            <span>Live</span>
            <div height="1rem" class="i-eva:external-link-outline block" />
          </a>

          <a v-if="data.demoUrl" :href="data.demoUrl" target="_blank"
            class="flex items-center flex-nowrap gap-x-1.5 text-slate-300 font-medium transition-colors hover:text-blue-500">
            <span>Demo</span>
            <div height="1rem" class="i-eva:external-link-outline block" />
          </a>
        </div>

        <div v-if="data.technologies.length"
          class="px-1 py-0.5 border-[0.2px] border-slate-100 rounded-full flex items-center gap-1">
          <img v-for="(stack, i) in data.technologies" :key="i" :src="TECHNOLOGIES[stack]?.icon ?? stack" :alt="stack"
            :title="TECHNOLOGIES[stack]?.title ?? stack" :width="16" class="w-3.5 h-3.5 p-[0.04rem] object-scale-down">
        </div>
      </div>
    </div>
  </article>
</template>
