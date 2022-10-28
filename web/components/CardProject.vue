<template>
  <article class="m-2 w-full max-w-xs bg-white rounded-2xl shadow shadow-blue-300 transition-shadow hover:(shadow-xl)">
    <div class="overflow-hidden h-44 rounded-t-[inherit]">
      <img :src="thumbnailSrc" :alt="title" :width="350" format="webp" class="object-cover w-full h-full" />
    </div>
    <div class="px-5 py-4">
      <h3 class="font-bold text-indigo-400 line-clamp-1" :title="title">
        {{ title }}
      </h3>

      <div class="pt-1 flex justify-between">
        <a :href="url"
          class="flex items-center flex-nowrap gap-x-2 text-slate-300 font-medium transition-colors hover:text-blue-500">
          <span>View Live</span>
          <div height="1rem" class="i-eva:external-link-outline block" />
        </a>

        <div v-if="techStack.length"
          class="px-1 py-0.5 border-[0.2px] border-slate-100 rounded-full flex items-center gap-1">
          <img v-for="(stack, i) in techStack" :key="i" :src="stack" :alt="stack" :width="16" format="webp"
            class="w-3.5 h-3.5 p-[0.04rem] object-scale-down" />
        </div>
      </div>
    </div>
  </article>
</template>

<script lang="ts" setup>
interface Props {
  title: string;
  url?: string;
  thumbnailSrc?: string;
  techStack?: string[];
}

withDefaults(defineProps<Props>(), {
  url: '#',
  thumbnailSrc: 'https://via.placeholder.com/300',
  techStack: () => [],
});
</script>
